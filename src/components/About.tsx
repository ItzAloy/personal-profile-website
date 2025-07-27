import React from 'react';
import { Video, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Music Video Animation', icon: Video, description: 'Creating dynamic animated music videos with smooth transitions' },
    { name: 'Lyric Music Video', icon: Heart, description: 'Text-based lyric animations synchronized to the beat' },
    { name: '2 Years Experience', icon: Award, description: 'Consistent quality and professional video editing' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm just someone who likes making AMV (Anime Music Videos). With 2 years of experience in video editing, 
                I've developed expertise in various editing software and techniques.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I started with CapCut but have since evolved to use more professional tools like 
                <span className="font-semibold text-blue-600"> Adobe After Effects</span>, 
                <span className="font-semibold text-purple-600"> Adobe Premiere Pro</span>, and 
                <span className="font-semibold text-orange-600"> DaVinci Resolve</span>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Because CapCut... you know what I mean. 😅
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Can Do</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Music Video Animation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Lyric Music Video
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Complex Camera Movements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Text Animation & Sync
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Thank You! 🤗</h3>
              <p className="text-white/90 leading-relaxed">
                I'm passionate about creating high-quality video content that brings stories to life. 
                Every project is an opportunity to push creative boundaries and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
