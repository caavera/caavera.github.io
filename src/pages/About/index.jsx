import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/about-animation.json";
import Skillset from "../../components/Skillset";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6 md:px-20">
            {/* Sección de presentación */}
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="text-left md:w-1/2 space-y-6">
                    <motion.h2
                        className="text-4xl font-bold text-center text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {t("about.title")}
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t("about.intro")}
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        {t("about.paragraph1")}
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {t("about.paragraph2")}
                    </motion.p>

                    <ul className="text-gray-300 space-y-2">
                        <motion.li
                            className="flex items-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.1 }}
                        >
                            ➤ {t("about.activities.0")}
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            ➤ {t("about.activities.1")}
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3 }}
                        >
                            ➤ {t("about.activities.2")}
                        </motion.li>
                    </ul>
                </div>

                {/* ANIMACIÓN - DERECHA */}
                <motion.div
                    className="w-72 md:w-96 mt-10 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <Lottie animationData={animationData} loop={true} speed={0.5} />
                </motion.div>
            </div>

            {/* Sección Skillset */}
            <Skillset />
        </section>
    );
};

export default About;