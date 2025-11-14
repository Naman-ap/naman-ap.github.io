import { Heart, Rocket, ArrowUp, Code2, Coffee } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm border-t border-cyan-500/20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                <Rocket className="w-7 h-7 text-cyan-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Crafting digital experiences that push boundaries and inspire innovation. 
              Always learning, always building.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Code2 className="w-4 h-4" />
              <span>Built with React & TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun section */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Currently</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Coffee className="w-5 h-5 text-yellow-500" />
                <span>Fueled by coffee & curiosity</span>
              </div>
              <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  "The best way to predict the future is to invent it."
                </p>
                <p className="text-gray-500 text-xs mt-2">- Alan Kay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
              <span>© {currentYear}</span>
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="text-sm font-medium">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
