import React from 'react';
import { ChevronDown, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Play className="text-white/20 w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <Star className="text-white/20 w-6 h-6" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float delay-2000">
          <Play className="text-white/20 w-10 h-10" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float delay-500">
          <Star className="text-white/20 w-8 h-8" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Aloy</span>
          </h1>
          
          <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
            STATUS: CLOSE!
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Just someone who likes making <span className="font-semibold text-purple-300">AMV</span>
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I have <span className="font-semibold text-pink-300">2 years experience</span> of video editing, 
            capable of using certain editing software such as 
            <span className="font-semibold text-blue-300"> Adobe After Effect</span>, 
            <span className="font-semibold text-green-300"> Adobe Premiere Pro</span>, and 
            <span className="font-semibold text-orange-300"> DaVinci Resolve</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </button>
            <button 
              onClick={() => {
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              View My Services
            </button>
          </div>

          <div className="animate-bounce">
            <button onClick={scrollToAbout} className="text-white/80 hover:text-white transition-colors">
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
