import { FaDownload, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import profileImg from "../../assets/WhatsApp Image .jpg"; // your uploaded image
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };


const Banner = () => {
    return (
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 text-white">

            {/* Left Conte  nt */}
            <motion.div
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
             className="space-y-6 max-w-xl py-12">
                <p className="text-cyan-300 font-medium">Hi, I'm Abdul Ali Arafat</p>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    <span className="text-cyan-400">Frontend </span>{" "}
                    <span className="text-purple-400">Developer</span>
                </h1>

                <p className="text-gray-300 text-lg">
                    I build scalable web applications and love experimenting with modern JavaScript tools and frameworks.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                    <a
                        href="/Abdul ali arafat.(Resume).pdf"
                        download
                        className="flex items-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:brightness-110 font-medium"
                    >
                        <FaDownload /> Download Resume
                    </a>
                    <Link
                        to="/projectDetails"
                        className="px-5 py-2 border border-cyan-400 hover:bg-cyan-700 rounded-md transition"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                    <a href="https://www.facebook.com/dreamlessarafat.ii/" className="p-2 border rounded-md hover:bg-gray-800 transition">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://www.linkedin.com/in/abdulaliarafat/" className="p-2 border rounded-md hover:bg-gray-800 transition">
                        <FaLinkedin></FaLinkedin>
                    </a>
                    <a href="https://github.com/Abdulaliarafat" className="p-2 border rounded-md
           hover:bg-gray-800 transition">
                        <FaGithub></FaGithub>
                    </a>
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            // className="lg:w-1/2 w-full"
            className="relative mt-10 md:mt-0 flex justify-center">
                <div className=" lg:mr-2 rounded-full border-8 border-purple-700 p-2 shadow-xl">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-70 h-90  object-cover rounded-full bg-yellow-400"
                    />
                </div>
            </motion.div>

        </div>
    );
};

export default Banner;
