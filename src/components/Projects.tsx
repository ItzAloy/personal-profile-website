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
      description: 'Working on 2 parts in a project',
      type: 'Commission Work'
    },
    {
      id: 2,
      title: 'Solo Project',
      category: 'solo',
      videoId: '5b9rxOv6UPo',
      thumbnail: `https://img.youtube.com/vi/5b9rxOv6UPo/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 3,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'cnHS5DszvwA',
      thumbnail: `https://img.youtube.com/vi/cnHS5DszvwA/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 4,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'HZuFRDok94A',
      thumbnail: `https://img.youtube.com/vi/HZuFRDok94A/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 5,
      title: 'Solo Project',
      category: 'solo',
      videoId: '_v6wU51lMSk',
      thumbnail: `https://img.youtube.com/vi/_v6wU51lMSk/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 6,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'LHqkGIik0Ho',
      thumbnail: `https://img.youtube.com/vi/LHqkGIik0Ho/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 7,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'oMuRhYoPZX4',
      thumbnail: `https://img.youtube.com/vi/oMuRhYoPZX4/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 8,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'MMIPWQac3yQ',
      thumbnail: `https://img.youtube.com/vi/MMIPWQac3yQ/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 9,
      title: 'Solo Project',
      category: 'solo',
      videoId: '7mfos_qfE7o',
      thumbnail: `https://img.youtube.com/vi/7mfos_qfE7o/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 10,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'VslbYTiA3IM',
      thumbnail: `https://img.youtube.com/vi/VslbYTiA3IM/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 11,
      title: 'Solo Project',
      category: 'solo',
      videoId: 'jSoJBxQI1GA',
      thumbnail: `https://img.youtube.com/vi/jSoJBxQI1GA/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 12,
      title: 'Solo Project',
      category: 'solo',
      videoId: '-ieM7HElDqo',
      thumbnail: `https://img.youtube.com/vi/-ieM7HElDqo/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Solo Project'
    },
    {
      id: 13,
      title: 'Christmast Graphic',
      category: 'commission',
      videoId: '#',
      thumbnail: `https://placehold.co/1280x720`,
      description: 'Working on Christmast Graphic for GPdi Elohim Sidoarjo',
      type: 'Commission Work',
      externalLink: 'https://www.instagram.com/shalom.crtv/'
    },
    {
      id: 14,
      title: '[MeTor💻]: Java Environment Set Up ☕',
      category: 'commission',
      videoId: 'SSPOekH3uaY',
      thumbnail: `https://img.youtube.com/vi/SSPOekH3uaY/maxresdefault.jpg`,
      description: 'Working on Video tutorials that were uploaded to SMK Telkom Malang\'s YouTube',
      type: 'Commission Work'
    },
    {
      id: 15,
      title: '[MeTor💻]: Java Fundamental Pt.1',
      category: 'commission',
      videoId: 'ADvYAWEHgQc',
      thumbnail: `https://img.youtube.com/vi/ADvYAWEHgQc/maxresdefault.jpg`,
      description: 'Working on Video tutorials that were uploaded to SMK Telkom Malang\'s YouTube',
      type: 'Commission Work'
    },
    {
      id: 16,
      title: '[MeTor💻]: Java Fundamental Pt.2',
      category: 'commission',
      videoId: 'fQS3070nbqQ',
      thumbnail: `https://img.youtube.com/vi/fQS3070nbqQ/maxresdefault.jpg`,
      description: 'Working on Video tutorials that were uploaded to SMK Telkom Malang\'s YouTube',
      type: 'Commission Work'
    },
    {
      id: 17,
      title: '[MeTor💻]: Java Fundamental Pt.3',
      category: 'commission',
      videoId: 'aFCc1XCBAUE',
      thumbnail: `https://img.youtube.com/vi/aFCc1XCBAUE/maxresdefault.jpg`,
      description: 'Working on Video tutorials that were uploaded to SMK Telkom Malang\'s YouTube',
      type: 'Commission Work'
    },
    {
      id: 18,
      title: '[MeTor💻]: Java Study Case - simple ATM Simulation',
      category: 'commission',
      videoId: 'v8ANjPPciHI',
      thumbnail: `https://img.youtube.com/vi/v8ANjPPciHI/maxresdefault.jpg`,
      description: 'Working on Video tutorials that were uploaded to SMK Telkom Malang\'s YouTube',
      type: 'Commission Work'
    },
    {
      id: 19,
      title: 'Moklet Youth DigiTalent',
      category: 'commission',
      videoId: 'MA85u2UL39Y',
      thumbnail: `https://img.youtube.com/vi/MA85u2UL39Y/maxresdefault.jpg`,
      description: 'Working on Assets for the Moklet Youth DigiTalent event',
      type: 'Commission Work',
      externalLink: 'https://www.instagram.com/smktelkommalang/p/moklet-youth-digitalent/'
    },
    {
      id: 20,
      title: 'Dies Natalis SMK Telkom Malang 32',
      category: 'commission',
      videoId: 'fGJVEqx_LJQ',
      thumbnail: `https://img.youtube.com/vi/fGJVEqx_LJQ/maxresdefault.jpg`,
      description: 'Working on Assets for the 32nd Dies Natalis event of SMK Telkom Malang',
      type: 'Commission Work',
      externalLink: 'https://www.instagram.com/smktelkommalang/p/dies-natalis-32/'
    },
    {
      id: 21,
      title: 'Social Media Content',
      category: 'commission',
      videoId: '#',
      thumbnail: `https://placehold.co/1280x720`,
      description: 'Lirik Animation for Gospel Song',
      type: 'Comission Work',
      externalLink: 'https://drive.google.com/drive/folders/12bcsfqaafI-xq5FgMX4wztTSgTjJbr1J?usp=sharing'
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

  const openExternalLink = (link: string) => {
    window.open(link, '_blank');
  };

  const handleProjectClick = (project: any) => {
    if (project.externalLink) {
      openExternalLink(project.externalLink);
    } else if (project.videoId && project.videoId !== '#') {
      openVideo(project.videoId);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my collection of video editing projects, from professional commissions to personal creative works
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-700/50 p-2 rounded-xl flex space-x-2 border border-primary-500/20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-600/50'
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
              className="bg-gray-700/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary-500/20 hover:border-primary-500/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group cursor-pointer" onClick={() => handleProjectClick(project)}>
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/480x270/374151/00AAFF?text=Video+Thumbnail';
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary-500/20 backdrop-blur-sm rounded-full p-4 border border-primary-500/50">
                    <Play className="w-8 h-8 text-primary-400" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  <span>
                    {project.externalLink 
                      ? 'View Project' 
                      : project.videoId && project.videoId !== '#' 
                        ? 'Watch on YouTube' 
                        : 'View Details'
                    }
                  </span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
