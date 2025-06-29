import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { use } from 'react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
const projectpromise = fetch('/project.json')
                      .then(res => res.json())
const FeaturedProjects = () => {
    const projects = use(projectpromise)
    return (
        <section className="py-16 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-b">Featured Projects</h2>
                </div>

                {projects.map((project) => (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.04, transition: { duration: 0.4, delay: 0.1 } }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        key={project.id}
                        className="flex flex-col lg:flex-row items-center gap-8 mb-16 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-1 hover:border-blue-600"
                    >
                        {/* Left Content */}
                        <div className="lg:w-1/2 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.projectName}</h3>
                            <p className="text-white/80 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                >
                                    <FaExternalLinkAlt /> Live Site
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                                >
                                    <FaGithub /> GitHub
                                </a>

                                <Link to={`/featuredetails/${project.id}`} className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">View More</Link>
                            </div>
                        </div>

                        {/* Right Image Carousel */}
                        <div className="lg:w-1/2 w-full">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                navigation={true}

                                className="rounded-xl overflow-hidden"
                            >
                                {project.projectImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image}
                                            alt={`${project.projectName} screenshot ${index + 1}`}
                                            className="w-full h-auto object-cover rounded-xl"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;