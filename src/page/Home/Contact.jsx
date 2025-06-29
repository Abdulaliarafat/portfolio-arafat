import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
// import { Link } from 'react-router';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 ">
      <div className="container max-w-4xl mx-auto px-4 py-20 card shadow-xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
            Have a project idea to collaborate with?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's bring your vision to life with cutting-edge <br /> web technologies and innovative solutions.
          </p>
         <Link  to='/detailsContact'>
         <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-700 hover:brightness-110 transition  rounded-lg font-bold text-lg hover:bg-gray-100 text-white duration-300"
            
          >
            <FaPaperPlane />
            Contact Me →
          </motion.div>
         </Link>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;