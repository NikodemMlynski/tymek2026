import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import Michal from "@/images/team/Michał.jpeg"
import Nikodem from "@/images/team/Nikodem.jpg"
import Kuba from "@/images/team/KubaPostrach.jpg"
// --- TYPY DANYCH ---

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface SliderButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

// --- DANE (MOCK) ---

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Michał Kosecki', role: 'Goat', image: Michal},
  { id: 2, name: 'Nikodem Młyński', role: 'Administrator', image: Nikodem },
  { id: 3, name: 'Kuba Postrach', role: 'Pełnomocnik komitetu', image: Kuba },
  { id: 4, name: 'Antoni Hoffmann', role: 'Cwel 2', image: '/images/krzysztof.jpg' },
  { id: 5, name: 'Wojtek Osiwalski', role: 'Cwel 3', image: '/images/magda.jpg' },
];

// --- KOMPONENTY POMOCNICZE ---

// 1. Przycisk Slidera (zdefiniowany poza komponentem głównym)
const SliderButton: React.FC<SliderButtonProps> = ({ direction, onClick, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 p-3 rounded-full 
               bg-black/40 text-white backdrop-blur-sm border border-white/10
               transition-all duration-300 z-10 
               hover:bg-purple-600 hover:border-purple-500 hover:scale-110
               disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black/40 disabled:hover:scale-100
               ${direction === 'left' ? '-left-4 sm:-left-6' : '-right-4 sm:-right-6'}`}
    aria-label={direction === 'left' ? 'Poprzedni slajd' : 'Następny slajd'}
  >
    {direction === 'left' ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
  </button>
);

// 2. Karta Członka Zespołu
const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="h-full px-3">
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl relative group h-[400px] w-full border border-white/5 bg-[#0a0a0a]">
        
        {/* Zdjęcie */}
        <div className="absolute inset-0 bg-gray-900">
           {/* Placeholder image logic - w produkcji użyj <img src={member.image} /> */}
           <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-700">
              <img 
                src={member.image} // Tu wstaw realne src
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                onError={(e) => {
                    // Fallback jeśli brak zdjęcia
                    (e.target as HTMLImageElement).style.display = 'none'; 
                }}
              />
              <Users className="w-20 h-20 opacity-10 absolute" />
           </div>
           
           {/* Overlay Gradientowy (dla czytelności tekstu) */}
           <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
  
        {/* Tekst na dole */}
        <div className="absolute bottom-0 p-6 w-full text-center transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-orange-400 tracking-wider uppercase mb-2">
            {member.role}
          </p>
          {/* Ozdobna linia */}
          <div className="w-12 h-1 bg-purple-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

// --- GŁÓWNY KOMPONENT ---

const TeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Hook do obsługi responsywności (ile kart na ekranie)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    // Ustawienie początkowe
    handleResize();

    // Nasłuchiwanie zmian
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Obliczenia logiczne slidera
  const totalItems = teamMembers.length;
  // Maksymalny indeks, do którego możemy przesunąć (aby nie pokazywać pustego miejsca)
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Obliczanie szerokości pojedynczego elementu w % (np. 33.333% dla 3 elementów)
  const itemWidth = 100 / itemsPerPage;
  // Przesunięcie całego paska
  const translateX = -(currentIndex * itemWidth);

  return (
    <div className="min-h-screen bg-[#050505] text-white py-16 px-4 sm:px-8 overflow-x-hidden font-sans">
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- NAGŁÓWEK --- */}
        <div className="text-center mb-16 relative">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full 
                         bg-purple-900/30 border border-purple-500/50 text-purple-200 
                         text-xs font-bold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <Users className="w-3 h-3 mr-2" />
            Mój Zespół
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            MÓJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">KOMITET WYBORCZY</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            To są osoby, które mnie wspierają i którym wiele zawdzięczam. 
            Razem tworzymy zgrany zespół, który chce zmienić naszą szkołę na lepsze!
          </p>

          <div className="flex justify-center gap-3 mt-8 text-xl">
            <span>💜</span><span>🧡</span><span>💜</span>
          </div>
        </div>

        {/* --- SLIDER --- */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-10">
          
          {/* Przyciski Nawigacyjne */}
          <SliderButton direction="left" onClick={prevSlide} />
          <SliderButton direction="right" onClick={nextSlide} />

          {/* Okno widoku (Viewport) */}
          <div className="overflow-hidden w-full py-4"> {/* py-4 aby cienie nie były ucinane */}
            
            {/* Pasek z elementami (Track) */}
            <div 
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ 
                transform: `translateX(${translateX}%)`,
                width: `${(totalItems / itemsPerPage) * 100}%` // Opcjonalne: dopasowanie szerokości kontenera
              }}
            >
              {teamMembers.map((member) => (
                // Wrapper elementu określający jego szerokość
                <div 
                  key={member.id} 
                  className="flex-shrink-0 transition-all duration-500"
                  style={{ width: `${100 / totalItems}%` }} // Wewnątrz tracka każdy element zajmuje odpowiednią część całości
                >
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Kropki (Paginacja) */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalItems - itemsPerPage + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${currentIndex === idx 
                    ? 'bg-orange-500 scale-125 shadow-[0_0_10px_rgba(249,115,22,0.6)]' 
                    : 'bg-gray-700 hover:bg-gray-500'}`}
                aria-label={`Idź do grupy ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default TeamPage;