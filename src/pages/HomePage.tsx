import React, { useState, type JSX } from 'react'; // Dodano 'useState'
import { Handshake, Zap } from 'lucide-react';
import StatCard from '@/components/StatCard'; 
import SupportModal from '@/components/SupportModal'; 
import { useSupportersCount } from '@/hooks/useSupporter';
import { Loader2 } from 'lucide-react';

interface StatData {
    iconName: 'Heart' | 'Users' | 'Trophy';
    value: JSX.Element;
    description: string;
}

const HomePage: React.FC = () => {
    const {data, isLoading, isError} = useSupportersCount();
    const [isModalOpen, setIsModalOpen] = useState(false);

    let countContent = <Loader2 />;
    if (isLoading) {
        countContent = <Loader2 />;
    }
    if (isError) {
        countContent = <p>Error</p>
    }
    if(!isLoading && !isError && data) {
        countContent = <p>{data.count}</p>;
    }
    const statData: StatData[] = [
        { iconName: 'Heart', value: countContent, description: 'Głosów poparcia' },
        { iconName: 'Users', value: <p>100 %</p>, description: 'Zaangażowania' },
        { iconName: 'Trophy', value: <p>∞</p>, description: 'Pomysłów' },
    ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
        
        <div className="fixed inset-0 bg-zinc-950 z-0 opacity-80">
             <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-red-800/20 rounded-full mix-blend-lighten filter blur-3xl opacity-60"></div>
             <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-900/40 rounded-full mix-blend-lighten filter blur-3xl opacity-60"></div>
             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/10 to-transparent"></div>
        </div>

        <div className="relative z-10 pt-20 pb-20 px-4 md:px-12 lg:px-20 flex flex-col items-center text-center min-h-screen">

            <div className="inline-flex items-center space-x-2 mb-8 px-6 py-2 rounded-full bg-black/50 border border-orange-400/50 shadow-lg backdrop-blur-sm">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-semibold text-white/90 tracking-wider">
                    Kandydat na Przewodniczącego
                </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
                <span className="text-gray-300 block">RAZEM</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400 block">
                    ZMIENIMY SZKOŁĘ
                </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
                Twój głos ma znaczenie! Dołącz do ruchu, który sprawi, że nasza szkoła stanie się miejscem, gdzie każdy chce być.
            </p>

            <button
                type="button"
                className="cursor-pointer inline-flex items-center justify-center space-x-3 px-14 py-4 rounded-xl bg-orange-400 hover:bg-orange-400 transition-transform duration-300 ease-in-out hover:scale-110 shadow-xl shadow-orange-400/50 text-white font-bold text-xl uppercase tracking-widest group"
                onClick={() => setIsModalOpen(true)} // Otwarcie modalu
            >
                <Handshake className="w-6 h-6 transition-transform" />
                <span>POPIERAM!</span>
            </button>

            <div className="mt-20 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                    <span className="text-gray-300">Transparentność</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="text-gray-300">Innowacja</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-gray-300">Wspólnota</span>
                </div>
            </div>
            
            <div className="w-full mt-24 mb-20 flex flex-col items-center space-y-6">
                {statData.map((stat, index) => (
                    <StatCard 
                        key={index}
                        iconName={stat.iconName}
                        value={stat.value}
                        description={stat.description}
                    />
                ))}
            </div>

        </div>

        <SupportModal 
            isOpen={isModalOpen}
            onOpenChange={setIsModalOpen}
        />
    </div>
  );
};

export default HomePage;