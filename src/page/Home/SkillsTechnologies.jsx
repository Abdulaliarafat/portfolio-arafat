import { motion } from 'framer-motion';
import {
    FaJs, FaReact, FaDatabase, FaNodeJs,
    FaHtml5, FaCss3Alt, FaGitAlt, FaPhp,
    FaFire, FaFigma, FaWordpress,
    FaGithub
} from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiBootstrap, SiMongodb, SiPostman, SiAdobephotoshop } from 'react-icons/si';

const SkillsTechnologies = () => {
    const fadeIn = {
        hidden: { opacity: 1, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const skills = [
        { name: "JavaScript", icon: <FaJs className="text-xl" />, color: "text-gray-100", bg: "bg-purple-50" },
        { name: "React", icon: <FaReact className="text-xl" />, color: "text-blue-200", bg: "bg-blue-50" },
        { name: "MongoDB", icon: <SiMongodb className="text-xl" />, color: "text-green-200", bg: "bg-green-50" },
        { name: "Express", icon: <SiExpress className="text-xl" />, color: "text-gray-200", bg: "bg-gray-100" },
        { name: "Firebase", icon: <FaFire className="text-xl" />, color: "text-orange-600", bg: "bg-orange-50" },
        { name: "HTML5", icon: <FaHtml5 className="text-xl" />, color: "text-orange-300", bg: "bg-orange-50" },
        { name: "CSS3", icon: <FaCss3Alt className="text-xl" />, color: "text-blue-300", bg: "bg-blue-50" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-xl" />, color: "text-cyan-400", bg: "bg-cyan-50" },
        { name: "Bootstrap", icon: <SiBootstrap className="text-xl" />, color: "text-purple-900", bg: "bg-purple-50" },
        { name: "Git", icon: <FaGithub className="text-xl" />, color: "text-gray-800", bg: "bg-purple-500" },
        { name: "NoSQL", icon: <FaDatabase className="text-xl" />, color: "text-blue-200", bg: "bg-blue-50" },
        { name: "Node.js", icon: <FaNodeJs className="text-xl" />, color: "text-green-300", bg: "bg-green-50" },
        { name: "Figma", icon: <FaFigma className="text-xl" />, color: "text-purple-300", bg: "bg-purple-50" },
    ];

    return (
        <section id="skills" className=" py-16 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900  ">
            <div className="container px-4 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-500 ">Skills & Technologies</h2>

                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-5"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                         whileHover={{ scale: 1.09, transition:{ duration: 0.8, delay: 0.1 } }}

                            key={index}
                            className={`flex justify-center items-center gap-4  p-5 rounded-lg ${skill.bg} border border-gray-50 hover:shadow-md transition-shadow duration-300 bg-purple-600`}
                        >
                            <div className={`${skill.color}`}>
                                {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-100 text-center">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsTechnologies;