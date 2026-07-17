import { personalData } from '../data';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white hover:text-blue-400 transition">
            {personalData.name}
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            <div className="flex gap-4 ml-4">
              <a href={personalData.github} target="_blank" className="text-gray-400 hover:text-white text-xl">
                <FaGithub />
              </a>
              <a href={personalData.linkedin} target="_blank" className="text-gray-400 hover:text-white text-xl">
                <FaLinkedin />
              </a>
              <a href={personalData.twitter} target="_blank" className="text-gray-400 hover:text-white text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>
          <button className="md:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            <div className="flex gap-4 text-2xl">
              <a href={personalData.github} target="_blank" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a>
              <a href={personalData.linkedin} target="_blank" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href={personalData.twitter} target="_blank" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}