import React, { useState } from 'react';
import { ExternalLink, Play, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Commission Project',
      category: 'commission',
      videoId: '0sITj1KFlb4',
      thumbnail: `https://img.youtube.com/vi/0sITj1KFlb4/maxresdefault.jpg`,
      description: 'Professional commission work showcasing advanced video editing techniques',
      type: 'Commission Work'
    },
    {
      id: 2,
      title: 'Solo Project #1',
      category: 'solo',
      videoId: '5b9rxOv6UPo',
      thumbnail: `https://img.youtube.com/vi/5b9rxOv6UPo/maxresdefault.jpg`,
      description: 'Personal creative project with unique visual style',
      type: 'Solo Project'
    },
    {
      id: 3,
      title: 'Solo Project #2',
      category: 'solo',
      videoId: 'cnHS5DszvwA',
      thumbnail: `https://img.youtube.com/vi/cnHS5DszvwA/maxresdefault.jpg`,
      description: 'Experimental animation techniques and storytelling',
      type: 'Solo Project'
    },
    {
      id: 4,
      title: 'Solo Project #3',
      category: 'solo',
      videoId: 'HZuFRDok94A',
      thumbnail: `https://img.youtube.com/vi/HZuFRDok94A/maxresdefault.jpg`,
      description: 'Complex motion graphics and visual effects',
      type: 'Solo Project'
    },
    {
      id: 5,
      title: 'Solo Project #4',
      category: 'solo',
      videoId: '_v6wU51lMSk',
      thumbnail: `https://img.youtube.com/vi/_v6wU51lMSk/maxresdefault.jpg`,
      description: 'Music video with synchronized animation',
      type: 'Solo Project'
    },
    {
      id: 6,
      title: 'Solo Project #5',
      category: 'solo',
      videoId: 'LHqkGIik0Ho',
      thumbnail: `https://img.youtube.com/vi/LHqkGIik0Ho/maxresdefault.jpg`,
      description: 'Creative storytelling through visual effects',
      type: 'Solo Project'
    },
    {
      id: 7,
      title: 'Solo Project #6',
      category: 'solo',
      videoId: 'oMuRhYoPZX4',
      thumbnail: `https://img.youtube.com/vi/oMuRhYoPZX4/maxresdefault.jpg`,
      description: 'Advanced editing with smooth transitions',
      type: 'Solo Project'
    },
    {
      id: 8,
      title: 'Solo Project #7',
      category: 'solo',
      videoId: 'MMIPWQac3yQ',
      thumbnail: `https://img.youtube.com/vi/MMIPWQac3yQ/maxresdefault.jpg`,
      description: 'Dynamic camera movements and effects',
      type: 'Solo Project'
    },
    {
      id: 9,
      title: 'Solo Project #8',
      category: 'solo',
      videoId: '7mfos_qfE7o',
      thumbnail: `https://img.youtube.com/vi/7mfos_qfE7o/maxresdefault.jpg`,
      description: 'Innovative editing techniques showcase',
      type: 'Solo Project'
    },
    {
      id: 10,
      title: 'Solo Project #9',
      category: 'solo',
      videoId: 'VslbYTiA3IM',
      thumbnail: `https://img.youtube.com/vi/VslbYTiA3IM/maxresdefault.jpg`,
      description: 'Professional quality music video',
      type: 'Solo Project'
    },
    {
      id: 11,
      title: 'Solo Project #10',
      category: 'solo',
      videoId: 'jSoJBxQI1GA',
      thumbnail: `https://img.youtube.com/vi/jSoJBxQI1GA/maxresdefault.jpg`,
      description: 'Complex animation and visual storytelling',
      type: 'Solo Project'
    },
    {
      id: 12,
      title: 'Solo Project #11',
      category: 'solo',
      videoId: '-ieM7HElDqo',
      thumbnail: `https://img.youtube.com/vi/-ieM7HElDqo/maxresdefault.jpg`,
      description: 'Latest creative project with new techniques',
      type: 'Solo Project'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Play },
    { id: 'commission', label: 'Commission', icon: Award },
    { id: 'solo', label: 'Solo Projects', icon: Play },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openVideo = (videoId: string) => {
    window.open(`https://youtu.be/${videoId}`, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of video editing projects, from professional commissions to personal creative works
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-xl flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                <category.icon size={18} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group cursor-pointer" onClick={() => openVideo(project.videoId)}>
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/480x270/6366f1/ffffff?text=Video+Thumbnail';
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button
                  onClick={() => openVideo(project.videoId)}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
