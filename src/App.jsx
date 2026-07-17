import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { personalData, skills, projects, experience, certifications, education } from './data';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-50 border-b border-white/10 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {personalData.name}
          </span>
          <div className="hidden md:flex gap-6">
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href={personalData.github} target="_blank" className="text-gray-400 hover:text-white text-xl">
              <FaGithub />
            </a>
            <a href={personalData.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-50 animate-pulse"></div>
            <div className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 relative z-10 shadow-2xl shadow-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-5xl">
              🧠
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {personalData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            {personalData.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            {personalData.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> {personalData.location}</span>
            <span className="flex items-center gap-2"><FaPhone /> {personalData.phone}</span>
            <span className="flex items-center gap-2"><FaEnvelope /> {personalData.email}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold transition shadow-lg shadow-blue-500/30 hover:scale-105">
              🚀 View My Work
            </a>
            <a href={personalData.resumeLink} target="_blank" className="px-8 py-3 border-2 border-white/20 hover:border-white/50 rounded-full font-semibold transition hover:scale-105">
              📄 Download Resume
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">5</div>
              <div className="text-gray-500">AI Projects</div>
            </div>
            <div className="text-center border-l border-white/10 pl-8">
              <div className="text-2xl font-bold text-purple-400">2.6+</div>
              <div className="text-gray-500">Years Experience</div>
            </div>
            <div className="text-center border-l border-white/10 pl-8">
              <div className="text-2xl font-bold text-pink-400">100%</div>
              <div className="text-gray-500">Remote Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Technologies I master for AI/ML development</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-black/40 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500 transition hover:scale-105" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">5 shipped AI projects - all live with public repos & demos</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform group-hover:scale-110 duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-3 py-1 rounded-full text-xs">⭐ Featured</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 py-1 rounded-full border border-white/10">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" className="flex-1 text-center text-gray-300 hover:text-white border border-white/20 hover:border-white/50 rounded-lg py-2 transition text-sm">📦 Code</a>
                    <a href={project.live} target="_blank" className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg py-2 transition text-sm font-semibold">🚀 Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, i) => (
              <div key={i} className="bg-black/40 border border-white/10 rounded-xl p-6 mb-6" data-aos="fade-up">
                <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                <p className="text-lg text-white">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period} · {exp.location}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 border border-white/10 rounded-xl p-6" data-aos="fade-right">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🎓 Education</h3>
              <p className="font-semibold">{education.degree}</p>
              <p className="text-gray-400 text-sm">{education.institution}</p>
              <p className="text-gray-400 text-sm">{education.period}</p>
              <p className="text-blue-400 font-semibold mt-2">CGPA: {education.cgpa}</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6" data-aos="fade-left">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📜 Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
                  <li key={i} className="text-sm text-gray-300">• {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-white/10 py-12 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {personalData.name}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">{personalData.bio}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-6">
            <a href={`mailto:${personalData.email}`} className="hover:text-blue-400 transition flex items-center gap-2">
              <FaEnvelope /> {personalData.email}
            </a>
            <a href={`tel:${personalData.phone}`} className="hover:text-blue-400 transition flex items-center gap-2">
              <FaPhone /> {personalData.phone}
            </a>
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> {personalData.location}</span>
          </div>
          <div className="flex justify-center gap-6 text-2xl mb-8">
            <a href={personalData.github} target="_blank" className="text-gray-400 hover:text-white transition hover:scale-110"> <FaGithub /> </a>
            <a href={personalData.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 transition hover:scale-110"> <FaLinkedin /> </a>
            <a href={personalData.twitter} target="_blank" className="text-gray-400 hover:text-sky-400 transition hover:scale-110"> <FaTwitter /> </a>
            <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-green-400 transition hover:scale-110"> <FaEnvelope /> </a>
          </div>
          <p className="text-gray-500 text-sm">© 2026 {personalData.name}. Built with ❤️ · Open to remote opportunities worldwide 🌍</p>
        </div>
      </footer>

      {/* Hire Me Button */}
      <a href={`mailto:${personalData.email}?subject=Job%20Opportunity%20for%20${personalData.name}`} className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition hover:scale-110 flex items-center gap-2 font-semibold animate-bounce">
        ✉️ Hire Me
      </a>
    </div>
  );
}

export default App;