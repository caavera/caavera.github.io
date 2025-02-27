import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-300 py-6 px-6 md:px-12 border-t border-gray-700">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center space-y-4 md:space-y-0 md:justify-between">
                
                {/* IZQUIERDA: Desarrollado por */}
                <p className="text-lg flex items-center justify-center">
                    Desarrollado por{" "}
                    <a href="https://github.com/caavera" target="_blank" rel="noopener noreferrer" 
                        className="text-purple-400 hover:text-purple-600 transition ml-1">
                        Carlos Vera
                    </a>
                </p>

                {/* CENTRO: Copyright */}
                <p className="text-lg text-gray-400 flex items-center justify-center">
                    Copyright © {currentYear} CV
                </p>

                {/* DERECHA: Contacto */}
                <div className="flex space-x-4 items-center justify-center">
                    <a href="mailto:veracar111@gmail.com" className="text-gray-300 hover:text-purple-400 transition">
                        <FaEnvelope className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/caavera" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-purple-400 transition">
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;