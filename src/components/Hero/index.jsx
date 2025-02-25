import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../../assets/hero-animation.json";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20">
            {/* TEXTO - IZQUIERDA */}
            <div className="ml-4 text-left md:text-left space-y-4 md:w-1/2">
                {/* Saludo con animación más natural y rápida */}
                <motion.div 
                    className="text-4xl text-white flex items-center mt-36 md:mt-0 mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    ¡Hola!{" "}
                    <motion.span 
                        className="ml-2 text-4xl"
                        style={{ transformOrigin: "bottom" }} // Cambia el punto de rotación
                        animate={{ 
                            rotate: [0, 20, 0, 20, 0, 0], // Agregamos un segundo ciclo de saludo
                        }}  
                        transition={{ 
                            repeat: Infinity, 
                            duration: 2, // Duración total de la animación
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Controla cada punto del movimiento
                            repeatDelay: 2 // Espera 2s antes de repetir
                        }}
                    >
                        👋🏻 
                    </motion.span>
                </motion.div>

                {/* Nombre con degradado */}
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                    Yo soy{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                        Carlos Vera
                    </span>
                </h1>

                {/* Efecto de máquina de escribir */}
                <p className="text-2xl md:text-4xl text-purple-400 font-semibold mt-16 md:mt-20">
                    <Typewriter 
                        words={["Desarrollador Full Stack", "Ingeniero de Sistemas"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}  // Un poco más rápido
                        deleteSpeed={40} 
                        delaySpeed={1200} // Menos espera entre frases
                    />
                </p>
            </div>

            {/* ANIMACIÓN - DERECHA */}
            <motion.div
                className="w-64 md:w-96 md:ml-16 mt-10 md:mt-0 transform scale-x-[-1]" // Reflejo horizontal
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }} // Entrada más rápida
            >
                <Lottie animationData={animationData} loop={true} />
            </motion.div>
        </section>
    );
};

export default Hero;