import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/about-animation.json"; // Reemplazar con la animación correcta

const About = () => {
    return (
        <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center">
            {/* TEXTO - IZQUIERDA */}
            <div className="text-center md:text-left md:w-1/2 space-y-6">
                <motion.h2 
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Conóceme
                </motion.h2>

                <motion.p 
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hola a todos, soy <span className="text-purple-400 font-semibold">Carlos Vera</span> de La Dorada, Colombia. 
                </motion.p>

                <motion.p 
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    Tengo <span className="text-purple-400 font-semibold">3 años</span> de experiencia profesional y soy 
                    Ingeniero de Sistemas graduado de la Universidad Autónoma de Manizales.
                </motion.p>

                <motion.p 
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Además de programar, algunas otras actividades que me encanta hacer:
                </motion.p>

                <ul className="text-gray-300 space-y-2">
                    <motion.li 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1 }}
                    >
                        ➤ Jugar videojuegos 🎮
                    </motion.li>
                    <motion.li 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        ➤ Leer libros 📚
                    </motion.li>
                    <motion.li 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3 }}
                    >
                        ➤ Aprender cosas nuevas 🚀
                    </motion.li>
                </ul>
            </div>

            {/* ANIMACIÓN / IMAGEN - DERECHA */}
            <motion.div
                className="w-72 md:w-96 mt-10 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
            >
                <Lottie animationData={animationData} loop={true} />
            </motion.div>
        </section>
    );
};

export default About;