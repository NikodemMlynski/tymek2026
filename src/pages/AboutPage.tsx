import { User, Medal, Code, Heart } from 'lucide-react'; // Użycie ikon z lucide-react (powszechnie używane w ekosystemie shadcn)
import Tymek from "@/images/tymek.jpeg"

const AboutPage = () => {
  return (
    // Główny kontener strony z tłem i marginesami
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 lg:p-12 font-sans">
      
      {/* Nagłówek i przycisk "Poznaj Mnie" */}
      <div className="flex justify-center items-center relative mb-10">
        <a 
          href="#" 
          className="absolute top-0 right-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 
                     px-4 py-2 text-sm font-semibold rounded-full 
                     bg-[#1e142c] text-white border border-[#523380] hover:bg-[#322350] transition-colors"
        >
          <User className="inline h-4 w-4 mr-1 text-orange-400" />
          <span className='text-orange-400 font-light'>Poznaj Mnie</span>
        </a>
        <h1 className="mt-6 text-4xl sm:text-7xl text-orange-400 tracking-tight pt-10">
          O MNIE
        </h1>
      </div>

      {/* Główny Kontener Sekcji - Duży, zaokrąglony i gradientowy */}
      <div className="max-w-6xl mx-auto p-8 lg:p-10 rounded-3xl shadow-[0_0_80px_rgba(72,30,107,0.5)] 
                      bg-gradient-to-br from-[#1b102b] to-[#0c0617]">
        
       

        {/* Sekcja Zawartości: Układ kolumnowy na małych ekranach, rzędowy na dużych */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEWA KOLUMNA: Zdjęcie i Podsekcje (Responsywny flex) */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            
            {/* Kontener Obrazu z Gradientem i Cieniem */}
            <div className="w-full aspect-[4/5] max-w-sm lg:max-w-none 
                            rounded-xl mb-8 
                            bg-gradient-to-br from-[#26163a] to-[#1a1127] 
                            shadow-[0_0_40px_rgba(72,30,107,0.7)] relative">
                
              <img src={Tymek} className='rounded-2xl w-full h-full'/>
            </div>

          </div>
          
          {/* PRAWA KOLUMNA: Treść Tekstowa */}
          <div className="w-full lg:w-2/3 text-gray-300">
            <h2 className="text-3xl font-semi-bold text-white mb-6">Cześć! Jestem <span className='text-orange-400'>Tymek</span></h2>
            
            <p className="mb-4">
              Od lat jestem aktywnym członkiem naszej społeczności szkolnej. Angażuję się w różne projekty, inicjatywy i zawsze staram się pomagać innym. Wierzę, że szkoła to nie tylko miejsce nauki, ale przede wszystkim wspólnota, którą możemy wspólnie kształtować.
            </p>
            
            <p className="mb-6">
              Moją pasją jest informatyka i programowanie, ale to nie wszystko – uwielbiam też sport, muzykę i spędzanie czasu z przyjaciółmi. Te różnorodne zainteresowania pozwalają mi rozumieć potrzeby różnych grup uczniów.
            </p>
            
            <p className="mb-8">
              Moim celem jest stworzenie szkoły, w której każdy będzie mógł się rozwijać, czuć się doceniony i po prostu dobrze spędzać czas.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-4 lg:mt-6">
                
                {/* Element 1: Średnia 5.0 */}
                <div className="flex items-center p-3 rounded-xl bg-[#1e142c] border border-[#3e2c5e]">
                    <span className="text-sm font-semibold flex items-center">
                        <Medal className="h-4 w-4 mr-2 text-yellow-500" />
                        Średnia 5.0
                    </span>
                </div>
                
                {/* Element 2: Olimpiady */}
                <div className="flex items-center p-3 rounded-xl bg-[#1e142c] border border-[#3e2c5e]">
                    <span className="text-sm font-semibold flex items-center">
                        <Medal className="h-4 w-4 mr-2 text-purple-400" />
                        Olimpiady
                    </span>
                </div>
                
                {/* Element 3: Programista */}
                <div className="flex items-center p-3 rounded-xl bg-[#1e142c] border border-[#3e2c5e]">
                    <span className="text-sm font-semibold flex items-center">
                        <Code className="h-4 w-4 mr-2 text-blue-400" />
                        Programista
                    </span>
                </div>
                
                {/* Element 4: Wolontariusz */}
                <div className="flex items-center p-3 rounded-xl bg-[#1e142c] border border-[#3e2c5e]">
                    <span className="text-sm font-semibold flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-red-400" />
                        Wolontariusz
                    </span>
                </div>
            </div>
      </div>
      
    </div>
  );
}

export default AboutPage;