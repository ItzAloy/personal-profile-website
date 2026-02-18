import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  videoId: string;
  thumbnail: string;
  description: string;
  type: string;
  externalLink?: string;
}

const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle modal open with animation
  const openModal = () => {
    setShowAllProjects(true);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  // Handle modal close with animation
  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setShowAllProjects(false), 300);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Commission Project',
      category: 'commission',
      videoId: '0sITj1KFlb4',
      thumbnail: `https://img.youtube.com/vi/0sITj1KFlb4/maxresdefault.jpg`,
      description: 'Working on 2 parts in a project',
      type: 'Commission Work',
      externalLink: 'https://www.behance.net/gallery/233605565/Flaminggo-Idol-Go-Toubun-no-Katachi'
    },
    {
      id: 2,
      title: 'Personal Project',
      category: 'personal',
      videoId: '5b9rxOv6UPo',
      thumbnail: `https://img.youtube.com/vi/5b9rxOv6UPo/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 3,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'cnHS5DszvwA',
      thumbnail: `https://img.youtube.com/vi/cnHS5DszvwA/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 4,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'HZuFRDok94A',
      thumbnail: `https://img.youtube.com/vi/HZuFRDok94A/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 5,
      title: 'Personal Project',
      category: 'personal',
      videoId: '_v6wU51lMSk',
      thumbnail: `https://img.youtube.com/vi/_v6wU51lMSk/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 6,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'LHqkGIik0Ho',
      thumbnail: `https://img.youtube.com/vi/LHqkGIik0Ho/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 7,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'oMuRhYoPZX4',
      thumbnail: `https://img.youtube.com/vi/oMuRhYoPZX4/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 8,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'MMIPWQac3yQ',
      thumbnail: `https://img.youtube.com/vi/MMIPWQac3yQ/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 9,
      title: 'Personal Project',
      category: 'personal',
      videoId: '7mfos_qfE7o',
      thumbnail: `https://img.youtube.com/vi/7mfos_qfE7o/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 10,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'VslbYTiA3IM',
      thumbnail: `https://img.youtube.com/vi/VslbYTiA3IM/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 11,
      title: 'Personal Project',
      category: 'personal',
      videoId: 'jSoJBxQI1GA',
      thumbnail: `https://img.youtube.com/vi/jSoJBxQI1GA/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 12,
      title: 'Personal Project',
      category: 'personal',
      videoId: '-ieM7HElDqo',
      thumbnail: `https://img.youtube.com/vi/-ieM7HElDqo/maxresdefault.jpg`,
      description: 'Personal Project to develop my skills',
      type: 'Personal Project'
    },
    {
      id: 13,
      title: 'Christmast Graphic',
      category: 'commission',
      videoId: '#',
      thumbnail: `/img/Christmast_Graphic.webp`,
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
      externalLink: 'https://www.behance.net/gallery/233600481/Kick-Off-Moklet-Youth-Digitalent'
    },
    {
      id: 20,
      title: 'Dies Natalis SMK Telkom Malang 32',
      category: 'commission',
      videoId: 'fGJVEqx_LJQ',
      thumbnail: `https://img.youtube.com/vi/fGJVEqx_LJQ/maxresdefault.jpg`,
      description: 'Working on Assets for the 32nd Dies Natalis event of SMK Telkom Malang',
      type: 'Commission Work',
      externalLink: 'https://www.behance.net/gallery/233607467/Dies-Natalis-32-Specta-Show'
    },
    {
      id: 21,
      title: 'Social Media Content',
      category: 'commission',
      videoId: '#',
      thumbnail: `img/Lyric_Animation.webp`,
      description: 'Lirik Animation for Gospel Song',
      type: 'Commission Work',
      externalLink: 'https://drive.google.com/drive/folders/12bcsfqaafI-xq5FgMX4wztTSgTjJbr1J?usp=sharing'
    },
    {
      id: 22,
      title: 'WowSkill - Wikusama WorldSkill Competition',
      category: 'website',
      videoId: '#',
      thumbnail: `/img/WowSkill_Website.webp`,
      description: 'Website Registration for WorldSkill Competition at SMK Telkom Malang',
      type: 'Website Project',
      externalLink: 'https://wowskill.smktelkom-mlg.sch.id/'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Project' },
    { id: 'commission', label: 'Commission' },
    { id: 'personal', label: 'Personal Project' },
    { id: 'website', label: 'Website' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Carousel always shows all projects, sorted by id descending
  const carouselProjects = [...projects].sort((a, b) => b.id - a.id);
  
  // Grid in modal uses filtered projects
  const gridProjects = [...filteredProjects].sort((a, b) => b.id - a.id);

  // Auto-scroll carousel
  useEffect(() => {
    if (showAllProjects) return;
    
    const interval = setInterval(() => {
      setScrollPosition(prev => prev + 1);
    }, 30);

    return () => clearInterval(interval);
  }, [showAllProjects]);

  const handleProjectClick = (project: Project) => {
    if (project.videoId && project.videoId !== '#') {
      setSelectedVideo(project);
    } else if (project.externalLink) {
      window.open(project.externalLink, '_blank');
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'commission': return 'bg-[#00bbff]';
      case 'personal': return 'bg-[#ff0099]';
      case 'website': return 'bg-[#3700ff]';
      default: return 'bg-white/20';
    }
  };

  return (
    <section id="projects" className="py-16 bg-[#050505] overflow-hidden">
      <div className="max-w-[1112px] mx-auto px-[20px]">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-bold text-white font-montserrat uppercase">
            The project I created
          </h2>
          <p className="text-[14px] text-white font-montserrat mt-2">
            Video Editing Expertise & Learning Web Development
          </p>
        </div>

        {/* Scrolling Carousel */}
        <div className="relative mb-8 overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex gap-4 animate-scroll"
            style={{
              transform: `translateX(-${scrollPosition % (carouselProjects.length * 360)}px)`,
              width: `${carouselProjects.length * 2 * 360}px`
            }}
          >
            {/* Duplicate items for infinite scroll */}
            {[...carouselProjects, ...carouselProjects].map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="bg-[#d9d9d9] rounded-[5px] h-[180px] w-[340px] flex-shrink-0 cursor-pointer overflow-hidden group relative"
                onClick={() => handleProjectClick(project)}
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Play className="w-12 h-12 text-white mb-2" fill="currentColor" />
                  <span className={`text-[10px] text-white px-2 py-1 rounded ${getCategoryColor(project.category)}`}>
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Button with Bracket Hover Effect */}
        <div className="flex justify-center">
          <button
            onClick={openModal}
            onMouseEnter={() => setHoveredButton('all')}
            onMouseLeave={() => setHoveredButton(null)}
            className="text-[12px] text-white font-consolas hover:opacity-80 transition-all"
          >
            <span className={`transition-opacity duration-200 ${hoveredButton === 'all' ? 'opacity-100' : 'opacity-0'}`}>[</span>
            All Project
            <span className={`transition-opacity duration-200 ${hoveredButton === 'all' ? 'opacity-100' : 'opacity-0'}`}>]</span>
          </button>
        </div>
      </div>

      {/* All Projects Modal */}
      {showAllProjects && (
        <div className={`fixed inset-0 bg-black/90 z-50 overflow-y-auto transition-opacity duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`max-w-[1112px] mx-auto px-[20px] py-8 transition-all duration-300 ${isModalVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[36px] font-bold text-white font-montserrat uppercase">
                All Projects
              </h2>
              <button 
                onClick={closeModal}
                className="text-white hover:opacity-80 transition-opacity"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Category Filter - Centered */}
            <div className="flex justify-center gap-6 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setHoveredButton(category.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`text-[12px] font-consolas transition-all ${
                    activeCategory === category.id
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <span className={`transition-opacity duration-200 ${
                    hoveredButton === category.id || activeCategory === category.id ? 'opacity-100' : 'opacity-0'
                  }`}>[</span>
                  {category.label}
                  <span className={`transition-opacity duration-200 ${
                    hoveredButton === category.id || activeCategory === category.id ? 'opacity-100' : 'opacity-0'
                  }`}>]</span>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {gridProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`bg-[#d9d9d9] rounded-[5px] h-[180px] cursor-pointer overflow-hidden group relative transition-all duration-500 ${isModalVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => handleProjectClick(project)}
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <Play className="w-10 h-10 text-white mb-2" fill="currentColor" />
                    <p className="text-white text-[12px] text-center font-montserrat mb-2">{project.title}</p>
                    <span className={`text-[10px] text-white px-2 py-1 rounded ${getCategoryColor(project.category)}`}>
                      {project.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-montserrat font-bold text-xl">{selectedVideo.title}</h3>
              <p className="text-white/70 font-montserrat text-sm mt-2">{selectedVideo.description}</p>
              {selectedVideo.externalLink && (
                <a 
                  href={selectedVideo.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00bbff] font-consolas text-sm mt-4 hover:opacity-80"
                >
                  View on Behance <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
