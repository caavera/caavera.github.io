import { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CertificateCard = ({ title, image }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Tarjeta del certificado */}
            <motion.div
                className="bg-black/20 border border-[#5B2E91] rounded-lg p-4 shadow-lg hover:shadow-purple-600 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white mt-2 text-center">{title}</h3>
            </motion.div>

            {/* Modal para mostrar la imagen grande */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4 mt-6">
                    <div className="relative bg-black p-6 rounded-lg max-w-3xl w-full shadow-lg">
                        {/* Botón de cierre con Heroicons */}
                        <button
                            className="absolute top-2 right-2 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center 
                            hover:bg-purple-800 transition border border-white shadow-md"
                            onClick={() => setIsOpen(false)}
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>


                        <img src={image} alt={title} className="w-full h-auto rounded-lg" />
                        <h3 className="text-lg font-semibold text-white mt-2 text-center">{title}</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default CertificateCard;