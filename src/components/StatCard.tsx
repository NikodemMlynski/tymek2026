import React, { type JSX } from 'react';
import { Heart, Users, Trophy } from 'lucide-react';

interface StatCardProps {
    iconName: 'Heart' | 'Users' | 'Trophy';
    value: JSX.Element;
    description: string;
}

const getIconComponent = (iconName: StatCardProps['iconName']) => {
    const size = 32;
    // Tło dla ikon naśladuje styl z obrazka: lekko zaokrąglone obramowanie i padding
    const iconBaseStyles = 'p-3 rounded-xl';

    switch (iconName) {
        case 'Heart':
            // Pomarańczowy/Czerwony (Głosów poparcia)
            return (
                <div className={iconBaseStyles + " bg-orange-400/10"}>
                    <Heart size={size} className="text-orange-400" />
                </div>
            );
        case 'Users':
            // Fioletowy (Zaangażowania)
            return (
                <div className={iconBaseStyles + "  bg-purple-800/10"}>
                    <Users size={size} className="text-purple-800" />
                </div>
            );
        case 'Trophy':
            // Miedziany/Żółty (Pomysłów)
            return (
                <div className={iconBaseStyles + " bg-orange-400/10"}>
                    <Trophy size={size} className="text-orange-400" />
                </div>
            );
        default:
            return null;
    }
};

const StatCard: React.FC<StatCardProps> = ({ iconName, value, description }) => {
    // Styl karty (ciemniejsze tło, zaokrąglone, padding)
    // Dodano hover:shadow-xl hover:shadow-orange-400/30 (dla pomarańczowego cienia)
    const cardBaseStyles = `
        w-[95%]
        bg-[#12121f]/70
        p-6 rounded-3xl flex flex-col items-center justify-center 
        shadow-2xl transition-all duration-300 ease-in-out
        cursor-pointer
        border border-[#333]
        hover:border-orange-400/60
    `;

    // Ustalenie specyficznego koloru dla obramowania karty (widoczne na zdjęciu)



    return (
        <div className={`${cardBaseStyles}`}>
            {getIconComponent(iconName)}

            <p className="text-4xl font-semibold mt-4 mb-1 text-white">
                {value}
            </p>

            <p className="text-gray-400 text-base font-medium tracking-wider">
                {description}
            </p>
        </div>
    );
};

export default StatCard;