import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
const FeaturedProjects = () => {
    const projects = [
        {
            "id": 1,
            "projectName": "HobbyHub",
            "projectImages": [
                "https://i.ibb.co/3mYds9Nd/Whats-App-Image-2025-06-29-at-08-44-58-e672f10f.jpg",
                "https://i.ibb.co/dwvc2LDK/Whats-App-Image-2025-06-29-at-08-47-52-684a52b4.jpg",
                "https://i.ibb.co/bgdyk0xQ/Whats-App-Image-2025-06-29-at-08-50-36-3fc49ac6.jpg",
                "https://i.ibb.co/67rfT5XN/Whats-App-Image-2025-06-29-at-08-52-05-5ed5e4af.jpg",
                "https://i.ibb.co/Kchy7BSz/Whats-App-Image-2025-06-29-at-08-53-13-ab82be69.jpg",
                "https://i.ibb.co/zT5TN1rN/Whats-App-Image-2025-06-29-at-08-54-20-7255c262.jpg"
            ],
            "techStack": [
                "React",
                "Vite",
                "Tailwind CSS",
                "DaisyUI",
                "Firebase",
                "Swiper.js",
                "React CountUp",
                "Framer Motion"
            ],
            "description": "A modern, responsive front-end web application for exploring hobbies with clean UI, elegant modals, and component-based architecture.",
            "liveLink": "https://hobbyhub-app.netlify.app",
            "githubLink": "https://github.com/Abdulaliarafat/HobbyHub-Client.git",
            "challenges": [
                "Implementing smooth animations across different screen sizes",
                "Managing state for complex modal interactions",
                "Optimizing performance for rich visual elements"
            ],
            "futurePlans": [
                "Add user authentication and personal hobby collections",
                "Implement social sharing features",
                "Expand hobby categories with community contributions"
            ]
        },
        {
            "id": 2,
            "projectName": "BiteClock",
            "projectImages": [
                "https://i.ibb.co/jkknBJKH/Whats-App-Image-2025-06-29-at-09-05-43-88c0e9d9.jpg",
                "https://i.ibb.co/HT1gfnPt/Whats-App-Image-2025-06-29-at-09-15-19-caf32611.jpg",
                "https://i.ibb.co/Y4Hry1VX/Whats-App-Image-2025-06-29-at-09-15-50-04003c02.jpg",
                "https://i.ibb.co/Nd6xrB7s/Whats-App-Image-2025-06-29-at-09-17-18-576810fa.jpg",
                "https://i.ibb.co/Nd6xrB7s/Whats-App-Image-2025-06-29-at-09-17-18-576810fa.jpg",
                "https://i.ibb.co/b5cG7QXY/Whats-App-Image-2025-06-29-at-09-19-44-a4b5b0a9.jpg"
            ],
            "techStack": [
                "React",
                "Vite",
                "Tailwind CSS",
                "DaisyUI",
                "Firebase",
                "Swiper.js",
                "React CountUp",
                "Framer Motion"
            ],
            "description": "A smart food expiry tracker that helps users reduce waste with alerts, food management tools, and lifestyle recommendations.",
            "liveLink": "https://bitclock-client.netlify.app/",
            "githubLink": "https://github.com/Abdulaliarafat/BitClock-client.git",
            "challenges": [
                "Implementing accurate expiry date calculations",
                "Creating intuitive food categorization",
                "Designing effective alert systems"
            ],
            "futurePlans": [
                "Add barcode scanning for automatic food entry",
                "Implement meal planning based on expiring items",
                "Develop mobile app version with push notifications"
            ]
        },
        {
            "id": 3,
            "projectName": "JobTrac",
            "projectImages": [
                "https://i.ibb.co/B5XQvT9f/Whats-App-Image-2025-06-29-at-09-27-10-848b71a7.jpg",
                "https://i.ibb.co/Z6j2kP2W/Whats-App-Image-2025-06-29-at-09-30-22-ef9fdc1d.jpg",
                "https://i.ibb.co/35hSbhZL/Whats-App-Image-2025-06-29-at-09-31-23-96cce4d8.jpg",
                "https://i.ibb.co/HTRhr9BR/Whats-App-Image-2025-06-29-at-09-33-00-0d4178b0.jpg"
            ],
            "techStack": [
                "React",
                "Vite",
                "Tailwind CSS",
                "DaisyUI",
                "Firebase",
                "Swiper.js",
                "React CountUp",
                "Framer Motion"
            ],
            "description": "A job tracking application with secure authentication, protected routes, and tools for managing job applications effectively.",
            "liveLink": "https://jobtrack-app.netlify.app/",
            "githubLink": "https://github.com/Abdulaliarafat/JobTrack-app",
            "challenges": [
                "Implementing secure authentication flows",
                "Creating responsive data tables for job listings",
                "Optimizing performance for large job application datasets"
            ],
            "futurePlans": [
                "Add resume parsing functionality",
                "Implement company research integration",
                "Develop interview preparation tools"
            ]
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900">
            <div className="container mx-auto px-4 max-w-5xl">
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
                                modules={[Autoplay, Pagination,Navigation]}
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