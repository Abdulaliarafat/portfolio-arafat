import { motion } from 'framer-motion';
import { FaLaptopCode, FaGraduationCap, FaDatabase, FaLightbulb, FaRunning, FaTableTennis } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 text-white">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                I'm <strong className="text-primary">Abdul Ali Arafat</strong>, a passionate Full-Stack MERN Developer from <span className="text-secondary">Sylhet, Bangladesh</span>. My journey in tech began when intermediate ICT subjects captivated me, and later my younger brother encouraged me to dive deeper into web development.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Tech Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-0.5"><FaGraduationCap /></span>
                    <span>Currently mastering Next.js and server-side rendering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-0.5"><FaDatabase /></span>
                    <span>Exploring MongoDB Aggregation and advanced Firebase Auth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5"><FaLaptopCode /></span>
                    <span>Optimizing React performance for better user experiences</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Beyond Coding</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-warning text-xl mt-0.5"><FaRunning /></span>
                    <span>Passionate about cricket, football, and badminton</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl mt-0.5"><FaLightbulb /></span>
                    <span>Believe sports boost my focus and work productivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-info text-xl mt-0.5"><FaTableTennis /></span>
                    <span>Always excited to explore new technologies and compare implementations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 w-full"
          >
            <div className="space-y-6">
              <div className="card bg-base-200 shadow-xl p-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 text-white">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold  mb-2 text-white">MERN-Stack Developer</div>
                  <div className="text-lg font-bold opacity-80 text-white">Current Focus</div>
                </div>
              </div>
              
              <div className="card bg-base-200 shadow-xl p-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 text-white">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold  mb-2 text-white">Back-End Development</div>
                  <div className="text-lg opacity-80 font-bold text-white ">Future goal</div>
                </div>
              </div>
              
              <div className="card bg-base-200 shadow-xl p-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold  mb-2 text-white">Sports</div>
                  <div className="text-lg opacity-80  font-bold text-white">Productivity Booster</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;