import React from 'react';
import { Video, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Music Video Animation', icon: Video, description: 'Creating dynamic animated music videos with smooth transitions' },
    { name: 'Lyric Music Video', icon: Heart, description: 'Text-based lyric animations synchronized to the beat' },
    { name: '2 Years Experience', icon: Award, description: 'Consistent quality and professional video editing' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-700/50 p-8 rounded-2xl shadow-lg border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Let me introduce myself. My name is Aloy. I'm an active student at SMK Telkom Malang with a deep interest in Network System Administration, Cybersecurity, and Video Editing. Of these three fields, I have the most experience in Video Editing.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm just someone who likes making AMV (Anime Music Videos). With 2 years of experience in video editing, 
                I've developed expertise in various editing software and techniques.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I started with CapCut but have since evolved to use more professional tools like 
                <span className="font-semibold text-blue-400"> Adobe After Effects</span>, 
                <span className="font-semibold text-primary-400"> Adobe Premiere Pro</span>, and 
                <span className="font-semibold text-orange-400"> DaVinci Resolve</span>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Because CapCut... you know what I mean. 😅
              </p>
            </div>

            <div className="bg-gray-700/50 p-8 rounded-2xl shadow-lg border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">What I Can Do</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Music Video Animation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
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
              <div key={index} className="bg-gray-700/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-500/20 hover:border-primary-500/40">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-lg">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{skill.name}</h4>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 rounded-2xl text-white shadow-lg">
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
