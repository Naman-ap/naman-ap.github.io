import { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'AlgoFlow',
    description:
      'Interactive algorithm visualization platform that helps developers understand complex data structures and algorithms through dynamic visual representations.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'JavaScript', 'D3.js', 'CSS3', 'Algorithms'],
    githubUrl: 'https://github.com/Naman-ap/AlgoFlow',
    featured: true,
  },
  {
    id: '2',
    title: 'UddeshAI',
    description:
      'AI-powered application designed to provide intelligent solutions and insights. Built with modern technologies for enhanced user experience.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'AI/ML', 'FastAPI', 'React', 'Machine Learning'],
    githubUrl: 'https://github.com/Naman-ap/UddeshAI',
    featured: true,
  },
  {
    id: '3',
    title: 'TypeGame',
    description:
      'Interactive typing speed game that challenges users to improve their typing skills with real-time feedback and performance analytics.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Development'],
    githubUrl: 'https://github.com/Naman-ap/TypeGame',
    featured: true,
  },
  {
    id: '4',
    title: 'Fraud Detection System',
    description:
      'Advanced machine learning system for detecting fraudulent activities and transactions with high accuracy and real-time processing.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn'],
    githubUrl: 'https://github.com/Naman-ap/fraud',
    featured: false,
  },
  {
    id: '5',
    title: 'NammaStock',
    description:
      'Stock market tracking and analysis application providing real-time market data, portfolio management, and investment insights.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'API Integration', 'Financial Data'],
    featured: false,
  },
  {
    id: '6',
    title: 'Mediverse',
    description:
      'Healthcare management platform connecting patients, doctors, and medical facilities for streamlined healthcare services and patient care.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Healthcare Tech'],
    featured: false,
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
          <p className="text-gray-400 text-lg">
            Exploring the digital universe, one project at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 h-full flex flex-col">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-semibold text-white shadow-lg">
                    Featured
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent transition-opacity duration-300 ${
                      hoveredId === project.id ? 'opacity-90' : 'opacity-70'
                    }`}
                  ></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-700">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
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
