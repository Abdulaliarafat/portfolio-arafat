import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DetailsContact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">Get In Touch</h2>

            <p className="text-xl text-gray-300">
              I'm currently open to freelance projects, collaborations, or any tech-related conversations. Let's build something amazing together!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                Contact Methods
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white/80 text-sm">Email</h4>
                  <a 
                    href="mailto:abdulaliarafat@gmail.com" 
                    className="text-white hover:text-blue-300 transition-colors text-lg"
                    onClick={(e) => {
                      if (!navigator.registerProtocolHandler) {
                        e.preventDefault();
                        navigator.clipboard.writeText("abdulaliarafat@gmail.com");
                        alert("Email copied to clipboard!");
                      }
                    }}
                  >
                    abdulaliarafat@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <FaPhone className="text-green-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white/80 text-sm">Phone</h4>
                  <a href="tel:+8801869653364" className="text-white hover:text-green-300 transition-colors text-lg">
                    +880 1869-653364
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10  rounded-full">
                  <FaWhatsapp className="text-green-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-white/80 text-sm">WhatsApp</h4>
                  <p className="text-white text-lg">Available for Instant messaging</p>
                  <a 
                    href="https://wa.me/8801869653364" 
                    className="inline-block mt-2 px-4 py-2 card shadow-xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-gray-100"
                  >
                    Message Me
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <FaMapMarkerAlt className="text-red-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white/80 text-sm">Location</h4>
                  <p className="text-white text-lg">Sylhet, Bangladesh</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <FaClock className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white/80 text-sm">Best Time to Reach</h4>
                  <p className="text-white text-lg">10:00 AM – 6:00 PM (GMT+6)</p>
                  <p className="text-white/80 text-sm mt-1">Open for freelance projects and collaborations</p>
                </div>
              </div>
            </div>

            {/* Right Column - Action Buttons and Social */}
            <div className="space-y-8">
              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href="mailto:abdulaliarafat@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-4 card shadow-xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-gray-100"
                >
                  <FaEnvelope />
                  Email Me
                </a>
                <a
                  href="tel:+8801869653364"
                  className="flex items-center justify-center gap-2 px-6 py-4 card shadow-xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-gray-100"
                >
                  <FaPhone />
                  Call Now
                </a>
                <a
                  href="https://wa.me/8801869653364"
                  className="flex items-center justify-center gap-2 px-6 py-4 card shadow-xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-gray-100"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>

              {/* Social Connections */}
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-4 h-4 bg-purple-400 rounded-full"></span>
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/ara-fat-021531362/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FaLinkedin className="text-blue-400" />
                    <span className="text-white">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Abdulaliarafat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-white">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsContact;