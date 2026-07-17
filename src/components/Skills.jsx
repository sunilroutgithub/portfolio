import { skills } from '../data';
import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillLevels = {
    "React": 90,
    "JavaScript": 85,
    "Node.js": 75,
    "Python": 80,
    "HTML/CSS": 95,
    "MongoDB": 70,
    "Git": 85,
    "UI/UX Design": 80
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-white/5" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies I master to build production-ready applications
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-blue-400 font-bold">
                      {skillLevels[skill.name] || 80}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full transition-all duration-1000 bg-gradient-to-r from-blue-500 to-purple-500`}
                      style={{ 
                        width: hoveredSkill === index ? `${skillLevels[skill.name] || 80}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}