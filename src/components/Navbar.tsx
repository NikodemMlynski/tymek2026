import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { House, ScrollText, Users, User, Menu, X } from 'lucide-react';

const Navbar = () => {
    // Stan do zarządzania widocznością menu mobilnego
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/', icon: <House color='white' size={20} /> },
        { name: 'Postulaty', path: '/demands', icon: <ScrollText color='white' size={20} /> },
        { name: 'Mój Team', path: '/team', icon: <Users color='white' size={20} /> },
        { name: 'O Mnie', path: '/about', icon: <User color='white' size={20} /> },
    ];

    const getLinkStyles = ({ isActive }: {isActive: boolean}) => {
        const baseStyles = `px-6 py-4 rounded-lg transition-colors duration-200 flex items-center gap-3`;

        // Style dla nieaktywnego linku oraz efekt najechania
        // W menu mobilnym text-white dla nieaktywnych linków dla lepszej czytelności
        const inactiveStyles = 'text-white hover:bg-orange-400/20';

        // Style dla aktywnego linku - pomarańczowe tło
        const activeStyles = 'bg-orange-400 text-white shadow-lg shadow-orange-400/50 font-bold';

        return `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="z-50 bg-black py-4 px-8 flex flex-col shadow-2xl border-b border-orange-400 relative">
            
            {/* Kontener logo i przycisku mobilnego (Top Bar) */}
            <div className="flex justify-between items-center z-50">
                {/* Logo/Nazwa Kampanii */}
                <div className="flex items-center text-4xl font-extrabold tracking-wider">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
                        T
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-800">
                        YMEK2026
                    </span>
                </div>

                {/* Desktopowe Menu - widoczne od rozmiaru 'lg' */}
                <div className="hidden lg:flex space-x-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={getLinkStyles}
                        >
                            {link.icon}
                            <span className="ml-[2px] text-lg font-medium">{link.name}</span>
                        </NavLink>
                    ))}
                </div>

                {/* Przycisk Hamburger/Zamknięcia - widoczny tylko na urządzeniach mobilnych (do 'lg') */}
                <button
                    className="lg:hidden text-white z-20"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
                >
                    <span className="bg-orange-400/13 rounded-lg p-2 flex items-center justify-center">
                    {
                        isOpen ? (<X color='orange' cursor={"pointer"} size={32} />) : (<Menu color='orange' cursor={"pointer"} size={32} />)
                    }
                        
                    </span>
                    
                </button>
            </div>

            {/* Mobilne Menu (Full-Width Dropdown) */}
            <div
                className={`
                    absolute top-full left-0 w-full bg-zinc-900 z-10 
                    transition-all duration-300 ease-in-out overflow-hidden
                    lg:hidden 
                    ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}
                `}
            >
                {/* Linki mobilne, ułożone w kolumnie */}
                <div className="flex flex-col space-y-1 px-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={getLinkStyles}
                            onClick={handleLinkClick}
                        >
                            {link.icon}
                            <span className="text-xl font-normal">{link.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;