import { delay } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      transition:{delay:40000}
    });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:ml-5">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Abdul Ali Arafat</h2>
            <h3 className="text-xl text-blue-400 mb-2">Frontend Developer</h3>
            <p className="text-gray-300 max-w-md">
              Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-10 gap-8 md:mr-6 ">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 mr-2 border-b border-gray-700 pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><NavLink to='/' className={({ isActive }) =>
          isActive
            ? 'underline'
            : 'text-gray-200 hover:text-white transition duration-300  block'
        }>Home</NavLink></li>
                <li><NavLink to='/projectDetails' className={({ isActive }) =>
          isActive
            ? 'underline'
            : 'text-gray-200 hover:text-white transition duration-300   block'
        }>Projects</NavLink></li>
                <li><NavLink to='/detailsContact'  className={({ isActive }) =>
          isActive
            ? 'underline'
            : 'text-gray-200 hover:text-white transition duration-300   block'
        }>Contact</NavLink></li>
              </ul>
            </div>

            {/* Let's Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Let's Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:xossarif@gmail.com" className="hover:text-blue-400 transition-colors">
                    abdulaliarafat@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Sylhet, Bangladesh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/Abdulaliarafat" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/abdulaliarafat/" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/Abdulaliaratat" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="text-xl" />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-gray-400 text-sm mt-4 lg:ml-10 md:mt-0">
            © 2025 Abdul Ali Arafat. Made with <span className="text-red-400">❤️</span> All rights reserved.
          </div>
          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="flex p-3 rounded-lg  border-1 border-blue-600 items-center gap-2 text-gray-100  bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 hover:border-2 md:mt-0 mt-5"
          >
            <FaArrowUp />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;