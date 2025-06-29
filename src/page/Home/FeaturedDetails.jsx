import React from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';
import { FaExternalLinkAlt, FaGithub, FaCode, FaLightbulb, FaTools } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedDetails = () => {
    const details=useLoaderData()
    const {id} =useParams()
    const project=details.find(detail=>detail.id == id)
    console.log(project)
    return (
        <section className="py-12 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.projectName}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Image Carousel */}
        <div className="mb-12 rounded-xl overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination,Navigation]}
            navigation={true}
            className="rounded-xl"
          >
            {project.projectImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image}
                    alt={`${project.projectName} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tech Stack */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <FaTools className="text-2xl text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white/20 rounded-lg text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-2xl text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Challenges</h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <FaLightbulb className="text-2xl text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Future Plans</h2>
            </div>
            <ul className="space-y-3">
              {project.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-900 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            <FaExternalLinkAlt /> Visit Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-lg"
          >
            <FaGithub /> View Source Code
          </a>
        </div>
      </div>
    </section>
    );
};

export default FeaturedDetails;