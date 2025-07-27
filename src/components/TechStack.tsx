import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    {
      name: 'Adobe After Effects',
      category: 'Video Editing',
      level: 'Advanced',
      color: 'from-purple-500 to-blue-500',
      description: 'Motion graphics, visual effects, and animation',
      icon: '🎬'
    },
    {
      name: 'Adobe Premiere Pro',
      category: 'Video Editing',
      level: 'Advanced',
      color: 'from-pink-500 to-purple-500',
      description: 'Professional video editing and post-production',
      icon: '🎥'
    },
    {
      name: 'DaVinci Resolve',
      category: 'Video Editing',
      level: 'Intermediate',
      color: 'from-orange-500 to-red-500',
      description: 'Color grading and professional editing',
      icon: '🎨'
    },
    {
      name: 'React JS',
      category: 'Web Development',
      level: 'Learning',
      color: 'from-blue-400 to-cyan-400',
      description: 'Modern JavaScript library for building UIs',
      icon: '⚛️'
    },
    {
      name: 'TypeScript',
      category: 'Web Development',
      level: 'Learning',
      color: 'from-blue-600 to-blue-800',
      description: 'Typed superset of JavaScript',
      icon: '📘'
    },
    {
      name: 'Tailwind CSS',
      category: 'Web Development',
      level: 'Learning',
      color: 'from-teal-400 to-blue-500',
      description: 'Utility-first CSS framework',
      icon: '🎨'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Learning':
        return 'bg-primary-500/20 text-primary-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and technologies I use to create amazing video content and web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <div className="flex justify-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="text-sm text-primary-400 font-medium">{tech.category}</div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: tech.level === 'Advanced' ? '75%' : 
                             tech.level === 'Intermediate' ? '35%' : '15%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🎬</span>
              Video Editing Expertise
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-gray-300">Motion Graphics & Animation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                <span className="text-gray-300">Color Grading & Correction</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                <span className="text-gray-300">Visual Effects (VFX)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-300">Audio Synchronization</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">💻</span>
              Web Development Learning
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-gray-300">Still learning to make a website</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
