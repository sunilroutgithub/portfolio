import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/5" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world applications with production-ready code
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="flex-1 text-center text-gray-300 hover:text-white border border-white/20 hover:border-white/50 rounded-lg py-2 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg py-2 transition flex items-center justify-center gap-2 text-sm font-semibold shadow-lg shadow-blue-500/20"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}