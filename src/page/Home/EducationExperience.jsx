import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EducationExperience = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education-experience" className="py-16 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-15">Educational & Experience </h2>
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Education Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="card bg-white shadow-md rounded-lg overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-900 to-purple-900 border-1 border-blue-600 hover:border-2  hover:border-blue-600">
              <div className="bg-gradient-to-r from-indigo-950 via-purple-900 to-purple-900 text-blue-500 p-4 flex items-center">
                <FaGraduationCap size={40} color='black' className="text-2xl mr-3 px-2 bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 p-2 rounded-md" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="p-6">
                <div className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex items-start">
                    <div className="mr-4">
                     <FaGraduationCap size={40} color='black' className="text-2xl mr-3 bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 p-3 rounded-md" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">B.A (Hons) in Islamic history and culture</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <FaMapMarkerAlt color='gray' className="mr-2 text-sm" />
                        <span className='text-gray-300'>National university</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="card bg-white shadow-md rounded-lg overflow-hidden bg-gradient-to-r from-purple-900 via-purple-900 to-blue-900  border-1 border-blue-600 hover:border-2  hover:border-blue-600">
              <div className="bg-gradient-to-r from-purple-900 via-purple-900 to-blue-900 text-blue-500  p-4 flex items-center">
                <FaBriefcase color='black' size={40} className="text-2xl mr-3 bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 p-2 rounded-md" />
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              <div className="p-6">
                <div className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex items-start">
                    <div className="  mr-4">
                      <FaBriefcase size={40} color='black' className="text-2xl mr-3 bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 p-3 rounded-md" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-300">No work experience</h3>
                      <p className="text-gray-100"></p>
                      <div className="flex items-center text-gray-300 mt-1">
                        {/* <FaCalendarAlt className="mr-2 text-sm" /> */}
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;