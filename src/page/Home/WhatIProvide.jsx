import { motion } from 'framer-motion';
import { FaLaptop, FaServer, FaCode, FaMobileAlt } from 'react-icons/fa';

const WhatIProvide = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const services = [
        {
            title: "Frontend Development",
            description: "I build responsive, interactive interfaces with React and Tailwind CSS, using animation and libraries to enhance user experience.",
            icon: <FaLaptop className="text-3xl text-blue-600" />,
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            title: "Backend Development",
            description: "I create secure, scalable APIs with Express and MongoDB, and use Next.js for server-side rendering and performance optimization",
            icon: <FaServer className="text-3xl text-green-600" />,
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            title: "MERN-Stack Solutions",
            description: "I develop full-stack web applications using MongoDB, Express, React, and Node.js, ensuring seamless client-server integration and performance.",
            icon: <FaCode className="text-3xl text-purple-600" />,
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        },
        {
            title: "Mobile-First Design",
            description: "I design interfaces that adapt beautifully to all screen sizes and Responsive designs that work perfectly across all devices, from mobile to desktop.",
            icon: <FaMobileAlt className="text-3xl text-orange-600" />,
            bgColor: "bg-orange-50",
            borderColor: "border-orange-200"
        }
    ];

    return (
        <section id="services" className="py-16 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 text-white">
            <div className="container px-4 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">What I Provide</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 1.06, transition: { type: 'spring', stiffness: 300 } }}
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-lg border-1 ${service.borderColor} ${service.bgColor} p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-800 text-white mt-9`}
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-200 flex-grow">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIProvide;