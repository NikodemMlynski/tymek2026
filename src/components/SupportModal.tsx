import React, { useState } from 'react';
import { Handshake, Heart} from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog'; 
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useCreateSupporter } from '@/hooks/useSupporter';
import { toast } from 'react-toastify';

// Lista klas do komponentu Select
const classOptions = [
    "1A",
    "1B",
    "1C",
    "1D",
    "1E",
    "1F",
    "1G",
    "1H",
    "2A",
    "2B",
    "2D",
    "2E",
    "2F",
    "2G",
    "2H",
    "3A",
    "3B",
    "3C",
    "3D",
    "3E",
    "3F",
    "3G",
    "3H",
    "3I",
    "4A",
    "4B",
    "4C",
    "4D",
    "4E",
    "4F",
    "4G",
    "4H",
    "4I",
    "5A",
    "5B",
    "5D",
    "5E",
    "5F",
    "5G",
    "5H",
    "5I",
];

interface SupportModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onOpenChange }) => {
    const [name, setName] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const createSupporterMutation = useCreateSupporter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        createSupporterMutation.mutate({
            name: name,
                class_: selectedClass
        },
        {
            onSuccess: () => {
                toast.success("Dziękujemy za wsparcie. Za chwile zostaniesz potwierdzony w systemie.");
            },
            onError: () => {
                toast.error("Nie udało się wysłać poparcia.");
            }
        }
        )

        setName('');
        setSelectedClass('');
        onOpenChange(false);
    };

    const customModalClasses = `
        bg-[#111117] text-white p-8 rounded-[30px] 
        max-w-md w-full border-0
        shadow-[0_0_60px_rgba(255,140,0,0.4),0_0_20px_rgba(147,51,234,0.3)]
    `;

    const heartIconStyle = (
        <div className="
            p-5 rounded-full mb-6 relative z-10
            /* Tło gradientowe i zaokrąglenie */
            bg-gradient-to-tr from-orange-500 to-purple-600
            /* Własny cień dla ikony */
            shadow-md shadow-purple-600/40
        ">
            <Heart 
                size={32} 
                className="text-white fill-white" 
            />
        </div>
    );


    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className={customModalClasses}>
                
                <div className="flex flex-col items-center text-center">

                    {heartIconStyle}

                    <h2 className="text-3xl font-bold mb-1">POPIERAM!</h2>
                    <p className="text-gray-400 mb-8 text-sm">
                        Dołącz do grona osób, które wierzą w zmianę
                    </p>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="space-y-2 text-left">
                            <Label htmlFor="name" className="text-gray-300 font-medium">Twoje imię</Label>
                            <Input
                                id="name"
                                placeholder="Wpisz swoje imię..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="bg-[#1e1e2d] border border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-orange-400/60 h-12"
                            />
                        </div>

                        <div className="space-y-2 text-left">
                            <Label htmlFor="class" className="text-gray-300 font-medium">Twoja klasa</Label>
                            <Select onValueChange={setSelectedClass} required value={selectedClass}>
                                <SelectTrigger 
                                    className="bg-[#1e1e2d] border border-gray-700 text-white focus:ring-orange-400 h-12"
                                    aria-label="Wybierz klasę"
                                >
                                    <SelectValue placeholder="np. 3A, 2B..." />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-800 border-gray-700 text-white max-h-[200px] overflow-auto">
                                    {classOptions.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button 
                            type="submit"
                            className="cursor-pointer w-full h-12 text-lg font-bold uppercase mt-6 tracking-wider
                                       bg-gradient-to-r from-orange-600 to-orange-400 text-white
                                       shadow-sm shadow-orange-500/50 hover:from-orange-700 hover:to-orange-500
                                       transition-all duration-300"
                        >
                            <Handshake className="mr-2 h-5 w-5" />
                            Oddaj głos poparcia!
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SupportModal;