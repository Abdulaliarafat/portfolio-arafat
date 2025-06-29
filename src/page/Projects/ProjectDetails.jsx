import { FaExternalLinkAlt, FaGithub, FaCode, FaLightbulb, FaTools } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const ProjectDetails = () => {
    const projects=useLoaderData()
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">All Projects</h1>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              {/* Project Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{project.projectName}</h2>
                <p className="text-white/80">{project.description}</p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {project.projectImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                    <img
                      src={image}
                      alt={`${project.projectName} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tech Stack */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FaTools className="text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FaCode className="text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">Challenges</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-white/90">
                        <span>•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Plans */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FaLightbulb className="text-yellow-400" />
                    <h3 className="text-xl font-semibold text-white">Future Plans</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.futurePlans.map((plan, index) => (
                      <li key={index} className="flex items-start gap-2 text-white/90">
                        <span>•</span>
                        <span>{plan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-white text-indigo-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;