import { personalData } from '../data';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `${personalData.title} 🚀`,
        'Building Scalable Apps',
        'Problem Solver',
        'Tech Enthusiast',
        'Remote Worker 🌍'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    };
    
    const typed = new Typed(typedRef.current, options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden" data-aos="fade-up">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-50 animate-pulse"></div>
          <img 
            src={personalData.profileImage} 
            alt={personalData.name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 relative z-10 shadow-2xl shadow-blue-500/30"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {personalData.name}
        </h1>
        <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-16">
          <span ref={typedRef}></span>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personalData.bio}
        </p>
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <a href={personalData.github} target="_blank" className="text-gray-400 hover:text-white transition-all hover:scale-125 hover:-translate-y-1">
            <FaGithub />
          </a>
          <a href={personalData.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-125 hover:-translate-y-1">
            <FaLinkedin />
          </a>
          <a href={personalData.twitter} target="_blank" className="text-gray-400 hover:text-sky-400 transition-all hover:scale-125 hover:-translate-y-1">
            <FaTwitter />
          </a>
          <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-green-400 transition-all hover:scale-125 hover:-translate-y-1">
            <FaEnvelope />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
            🚀 View My Work
          </a>
          <a href={personalData.resumeLink} className="px-10 py-4 border-2 border-white/20 hover:border-white/50 rounded-full font-semibold transition-all hover:scale-105 hover:bg-white/5">
            📄 Download Resume
          </a>
        </div>
        <div className="mt-12 flex justify-center gap-8 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{projects.length}+</div>
            <div className="text-gray-500">Projects</div>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <div className="text-2xl font-bold text-purple-400">1+</div>
            <div className="text-gray-500">Years Coding</div>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <div className="text-2xl font-bold text-pink-400">100%</div>
            <div className="text-gray-500">Remote Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}