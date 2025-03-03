import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UserIcon, CodeBracketIcon, AcademicCapIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaCodeBranch, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

// Define los elementos de navegación usando claves de traducción.
const navItems = [
    { to: "/", translationKey: "navbar.home", Icon: HomeIcon },
    { to: "/about", translationKey: "navbar.about", Icon: UserIcon },
    { to: "/projects", translationKey: "navbar.projects", Icon: CodeBracketIcon },
    { to: "/certifications", translationKey: "navbar.certifications", Icon: AcademicCapIcon },
];

// Componente para cada enlace de navegación.
const NavLinkItem = ({ to, text, Icon, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="group relative flex flex-col items-center text-lg font-bold text-white hover:text-purple-400 transition"
    >
        <div className="flex items-center">
            <Icon className="w-6 h-6 mr-2" /> {text}
        </div>
        {/* Underline animado */}
        <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
);

// Componente para el botón de GitHub.
const GithubButton = () => (
    <a
        href="https://github.com/caavera/caavera.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-[#6B3FA0] text-white px-4 py-2 rounded-lg hover:bg-[#54318C] transition transform hover:scale-102 shadow-lg"
    >
        <FaCodeBranch className="w-5 h-5" />
        <FaStar className="w-5 h-5" />
    </a>
);

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className="flex items-center">
            <button
                onClick={() => changeLanguage("es")}
                className={`flex items-center ${currentLang === "es" ? "font-bold" : "opacity-60 hover:opacity-100"}`}
                aria-label="Cambiar a Español"
            >
                <ReactCountryFlag
                    countryCode="ES"
                    svg
                    style={{ width: "1.8em", height: "1.8em" }}
                    title="Spain"
                />
                <span className="ml-1 text-white text-sm">ES</span>
            </button>
            <span className="mx-2 text-white">|</span>
            <button
                onClick={() => changeLanguage("en")}
                className={`flex items-center ${currentLang === "en" ? "font-bold" : "opacity-60 hover:opacity-100"}`}
                aria-label="Switch to English"
            >
                <span className="mr-1 text-white text-sm">EN</span>
                <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{ width: "1.8em", height: "1.8em" }}
                    title="United States"
                />
            </button>
        </div>


    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-700">
            {/* Contenedor a ancho completo con justify-between */}
            <div className="flex items-center justify-between px-6 md:px-12 py-4">
                {/* LOGO */}
                <div className="text-2xl font-bold text-purple-400 md:pl-12">CV.</div>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <NavLinkItem
                            key={item.to}
                            to={item.to}
                            text={t(item.translationKey)}
                            Icon={item.Icon}
                        />
                    ))}
                    <GithubButton />
                    <LanguageSelector />
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
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
                            {navItems.map((item) => (
                                <NavLinkItem
                                    key={item.to}
                                    to={item.to}
                                    text={t(item.translationKey)}
                                    Icon={item.Icon}
                                    onClick={() => setIsOpen(false)}
                                />
                            ))}
                            <LanguageSelector />
                            <GithubButton />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
