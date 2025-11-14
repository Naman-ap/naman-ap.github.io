import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'Siemens',
    role: 'Graduate Engineer Trainee',
    period: 'Aug 2025 - Present',
    description:
      'Building enterprise full-stack applications using React, FastAPI, and Spring Boot. Developing cloud-native solutions on Azure with PostgreSQL, creating scalable applications that serve thousands of users.',
    technologies: ['React', 'FastAPI', 'Spring Boot', 'Azure', 'PostgreSQL', 'Microservices'],
  },
  {
    id: '2',
    company: 'Impact Analytics',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2025 - June 2025',
    description:
      'Developed full-stack applications and data analytics solutions using React and FastAPI. Built responsive UIs and high-performance APIs, optimizing data workflows and enhancing business intelligence capabilities.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Postman', 'Git', 'AWS'],
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-gray-400 text-lg">My professional journey through the tech cosmos</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 transition-all duration-1000 delay-${index * 200} ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : `opacity-0 ${
                      index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'
                    }`
              }`}
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2"></div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 shadow-lg shadow-cyan-400/50 z-10"></div>

                <div className="md:w-1/2 ml-16 md:ml-0">
                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <Briefcase className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-cyan-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
