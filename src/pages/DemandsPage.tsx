import React from 'react';
import { Coffee, Music, Gamepad, Book, Leaf, Clock, Users, Target } from 'lucide-react';

// Interfejs dla postulatu, dla lepszej struktury
interface Demand {
  icon: React.ElementType;
  title: string;
  description: string;
  priority: 'Wysoki' | 'Średni';
}

// Dane do wyświetlenia postulatów
const demandsData: Demand[] = [
  {
    icon: Coffee,
    title: 'Strefa Chill dla Uczniów',
    description: 'Stworzenie przestrzeni relaksacyjnej z wygodnymi fotelami, grami planszowymi i automatem z przekąskami. Miejsce, gdzie można odpocząć między lekcjami.',
    priority: 'Wysoki',
  },
  {
    icon: Music,
    title: 'Więcej Wydarzeń Szkolnych',
    description: 'Organizacja regularnych koncertów, turniejów e-sportowych, wieczorów filmowych i innych imprez integracyjnych dla całej społeczności szkolnej.',
    priority: 'Wysoki',
  },
  {
    icon: Gamepad,
    title: 'Sala Gamingowa',
    description: 'Utworzenie sali z konsolami i komputerami do gier, gdzie uczniowie mogą spędzać czas po lekcjach i organizować turnieje.',
    priority: 'Średni',
  },
  {
    icon: Book,
    title: 'Modernizacja Biblioteki',
    description: 'Przekształcenie biblioteki w nowoczesne centrum multimedialne z nowymi książkami, e-bookami i strefą cichej nauki.',
    priority: 'Średni',
  },
  {
    icon: Leaf,
    title: 'Eko Inicjatywy',
    description: 'Wprowadzenie segregacji odpadów, stacji ładowania dla urządzeń na energię słoneczną i programu wymiany podręczników.',
    priority: 'Średni',
  },
  {
    icon: Clock,
    title: 'Elastyczne Przerwy',
    description: 'Propozycja wprowadzenia dłuższej przerwy obiadowej oraz możliwości wcześniejszego kończenia zajęć w piątki.',
    priority: 'Wysoki',
  },
  {
    icon: Users,
    title: 'Rada Uczniowska 2.0',
    description: 'Stworzenie aplikacji do zgłaszania pomysłów i głosowania nad inicjatywami. Każdy głos będzie się liczył!',
    priority: 'Wysoki',
  },
  {
    icon: Target,
    title: 'Programy Mentorskie',
    description: 'Uruchomienie systemu, gdzie starsi uczniowie pomagają młodszym w nauce i adaptacji w szkole.',
    priority: 'Średni',
  },
];

// Komponent pojedynczego postulatu
const DemandCard: React.FC<{ demand: Demand }> = ({ demand }) => {
  const IconComponent = demand.icon;

  // Klasy do kolorowania Badge Priorytetu
  const priorityColors = {
    'Wysoki': 'bg-orange-600',
    'Średni': 'bg-purple-600',
  };

  return (
    <div className="p-6 rounded-xl border border-[#3e2c5e] 
                    bg-gradient-to-br from-[#1e142c] to-[#0c0617] 
                    shadow-lg hover:shadow-[0_0_20px_rgba(72,30,107,0.5)] transition-shadow duration-300">
      
      {/* Nagłówek i Priorytet */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-4">
          {/* Ikona */}
          <div className="p-3 rounded-full bg-[#3e2c5e] shadow-inner">
            <IconComponent className="h-6 w-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">
            {demand.title}
          </h3>
        </div>
        
        {/* Badge Priorytet */}
        <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${priorityColors[demand.priority]}`}>
          {demand.priority}
        </span>
      </div>

      {/* Opis */}
      <p className="text-sm text-gray-400">
        {demand.description}
      </p>
    </div>
  );
};

// Główny komponent strony
const DemandsPage = () => {
  return (
    // Główny kontener strony z tłem
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 lg:p-12 font-sans">
      
      {/* Nagłówek Strony */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Przycisk "Moje Postulaty" */}
        <a 
          href="#" 
          className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full 
                     bg-[#1e142c] text-white border border-[#523380] hover:bg-[#322350] transition-colors mb-4"
        >
          <Book className="inline h-4 w-4 mr-1" />
          Moje Postulaty
        </a>
        
        {/* Tytuł Strony */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
          CO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">ZMIENIĘ</span>?
        </h1>
        
        {/* Podtytuł */}
        <p className="mt-4 text-gray-400 max-w-lg mx-auto">
          Oto konkretne propozycje, które chcę wprowadzić jako przewodniczący. Każdy postulat to odpowiedź na realne potrzeby uczniów.
        </p>
      </div>

      {/* Kontener Postulatów - Układ Siatki (Grid) */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demandsData.map((demand, index) => (
            <DemandCard key={index} demand={demand} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default DemandsPage;