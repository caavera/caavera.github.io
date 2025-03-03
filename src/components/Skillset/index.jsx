import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaPython, FaJava, FaNpm } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiVite, SiPostman, SiDocker, SiLinux } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "NPM", icon: <FaNpm /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
];

const tools = [
    { name: "VS Code", icon: <BiLogoVisualStudio /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Linux", icon: <SiLinux /> },
];

const Skillset = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6 md:px-20">
            {/* Título */}
            <motion.h2
                className="text-center text-4xl font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                {t("skillset.title")} <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">{t("skillset.titleGradient")}</span>
            </motion.h2>


            {/* Tecnologías */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 border border-purple-500 rounded-xl bg-transparent text-white text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="text-5xl mb-2">{skill.icon}</div>
                        {skill.name}
                    </motion.div>
                ))}
            </div>

            {/* Herramientas */}
            <motion.h3
                className="text-center text-3xl font-bold text-white mt-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">{t("skillset.toolsTitleGradient")}</span> {t("skillset.toolsTitleSuffix")}
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 border border-purple-500 rounded-xl bg-transparent text-white text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="text-5xl mb-2">{tool.icon}</div>
                        {tool.name}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skillset;