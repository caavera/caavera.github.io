import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaNpm } from "react-icons/fa";
import projects from "../../data/projects";

const Projects = () => {
    return (
        <section className="py-20 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center text-white">
                Mis <span className="text-[#6B3FA0]">Proyectos</span> Recientes
            </h2>
            <p className="text-center text-gray-400 mt-2">
                Estos son algunos de los proyectos en los que he trabajado recientemente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 px-1 lg:px-12 xlg:p-18">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-black/20 border border-[#6B3FA0] rounded-lg p-3 lg:p-9 shadow-lg hover:shadow-[#6B3FA0] transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.name} className="w-full h-full bg-cover" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mt-4">{project.name}</h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>
                        <p className="text-purple-400 mt-2 text-sm">{project.tech.join(" • ")}</p>

                        {/* Botones centrados */}
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href={project.github} target="_blank" className="bg-[#6B3FA0] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#54318C] transition">
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            {project.demo && (
                                <a href={project.demo} target="_blank" className="bg-[#6B3FA0] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#54318C] transition">
                                    <FaExternalLinkAlt className="mr-2" /> Demo
                                </a>
                            )}
                            {project.npm && (
                                <a href={project.npm} target="_blank" className="bg-[#6B3FA0] text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-700 transition">
                                    <FaNpm className="mr-2" /> NPM
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
