import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../../assets/hero-animation.json";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
    // Se obtienen las profesiones como un array usando returnObjects: true
    const professions = t("hero.professions", { returnObjects: true });

    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20">
            {/* TEXTO - IZQUIERDA */}
            <div className="ml-4 text-left md:text-left space-y-4 md:w-1/2">
                {/* Saludo con animación */}
                <motion.div
                    className="text-4xl text-white flex items-center mt-36 md:mt-0 mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("hero.greeting")}{" "}
                    <motion.span
                        className="ml-2 text-4xl"
                        style={{ transformOrigin: "bottom" }}
                        animate={{ rotate: [0, 20, 0, 20, 0, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                            repeatDelay: 2
                        }}
                    >
                        👋🏻
                    </motion.span>
                </motion.div>

                {/* Título / Nombre */}
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                    {t("hero.intro")}{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                        {t("hero.name")}
                    </span>
                </h1>

                {/* Máquina de escribir para profesiones */}
                <p className="text-2xl md:text-4xl text-purple-400 font-semibold mt-16 md:mt-20">
                    <Typewriter
                        words={professions}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={40}
                        delaySpeed={1200}
                    />
                </p>
            </div>

            {/* Animación - DERECHA */}
            <motion.div
                className="w-64 md:w-96 md:ml-16 mt-10 md:mt-0 transform scale-x-[-1]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <Lottie animationData={animationData} loop={true} />
            </motion.div>
        </section>
    );
};

export default Hero;
