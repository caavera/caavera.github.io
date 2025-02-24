import { useState } from "react";
import { HomeIcon, UserIcon, CodeBracketIcon, AcademicCapIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-700">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                
                {/* LOGO */}
                <div className="text-2xl font-bold text-purple-400">CV.</div>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex space-x-12">
                    <a href="#home" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition">
                        <HomeIcon className="w-6 h-6 mr-2" /> Inicio
                    </a>
                    <a href="#about" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition">
                        <UserIcon className="w-6 h-6 mr-2" /> Sobre mí
                    </a>
                    <a href="#projects" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition">
                        <CodeBracketIcon className="w-6 h-6 mr-2" /> Proyectos
                    </a>
                    <a href="#certifications" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition">
                        <AcademicCapIcon className="w-6 h-6 mr-2" /> Certificaciones
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                </button>
            </div>

            {/* MOBILE MENU (ANIMADO CON FRAMER MOTION) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-700 shadow-lg"
                    >
                        <div className="flex flex-col items-center py-4 space-y-4">
                            <a href="#home" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>
                                <HomeIcon className="w-6 h-6 mr-2" /> Inicio
                            </a>
                            <a href="#about" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>
                                <UserIcon className="w-6 h-6 mr-2" /> Sobre mí
                            </a>
                            <a href="#projects" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>
                                <CodeBracketIcon className="w-6 h-6 mr-2" /> Proyectos
                            </a>
                            <a href="#certifications" className="flex items-center text-lg font-bold text-white hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>
                                <AcademicCapIcon className="w-6 h-6 mr-2" /> Certificaciones
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;