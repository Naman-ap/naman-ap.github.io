import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Naman-ap',
      description: 'Check out my code',
      color: 'hover:text-gray-300 hover:bg-gray-800/30',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/naman-chawla-128160229/',
      description: 'Let\'s connect professionally',
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/Namancpp',
      description: 'Follow my thoughts',
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
    },
    {
      name: 'Peerlist',
      icon: Instagram,
      url: 'https://peerlist.io/naman10ap',
      description: 'My professional profile',
      color: 'hover:text-green-400 hover:bg-green-500/10',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate or just want to say hello? Find me across the digital universe
          </p>
        </div>

        {/* Email Section */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Drop me an email</h3>
                  <p className="text-gray-400">I usually respond within 24 hours</p>
                </div>
              </div>
              <a
                href="mailto:namanchawla72@gmail.com"
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                <span>namanchawla72@gmail.com</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${social.color} hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{social.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you want to discuss a project, collaborate on something awesome, or just chat about technology, 
              I'm always excited to connect with fellow creators and innovators!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
