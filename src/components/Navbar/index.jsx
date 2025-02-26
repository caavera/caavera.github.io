import { useState } from "react";
import { Link } from "react-router-dom";
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
                    {[
                        { to: "/", text: "Inicio", icon: HomeIcon },
                        { to: "/about", text: "Sobre mí", icon: UserIcon },
                        { to: "/projects", text: "Proyectos", icon: CodeBracketIcon },
                        { to: "/certifications", text: "Certificaciones", icon: AcademicCapIcon },
                    ].map(({ to, text, icon: Icon }) => (
                        <Link 
                            key={to} 
                            to={to} 
                            className="group relative flex flex-col items-center text-lg font-bold text-white hover:text-purple-400 transition"
                        >
                            <div className="flex items-center">
                                <Icon className="w-6 h-6 mr-2" /> {text}
                            </div>
                            {/* Underline animado */}
                            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </Link>
                    ))}
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
                            {[
                                { to: "/", text: "Inicio", icon: HomeIcon },
                                { to: "/about", text: "Sobre mí", icon: UserIcon },
                                { to: "/projects", text: "Proyectos", icon: CodeBracketIcon },
                                { to: "/certifications", text: "Certificaciones", icon: AcademicCapIcon },
                            ].map(({ to, text, icon: Icon }) => (
                                <Link 
                                    key={to} 
                                    to={to} 
                                    className="group relative flex flex-col items-center text-lg font-bold text-white hover:text-purple-400 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center">
                                        <Icon className="w-6 h-6 mr-2" /> {text}
                                    </div>
                                    {/* Underline animado */}
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;