import React, { useState, useEffect } from 'react';
import { X, Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  image: string;
  link: string;
  category: string;
}

const Certificates: React.FC = () => {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle modal open with animation
  const openModal = () => {
    setShowAllCertificates(true);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  // Handle modal close with animation
  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setShowAllCertificates(false), 300);
  };

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Fortinet: Network Security',
      image: '/img/certificate/Fortinet.webp',
      link: 'https://drive.google.com/file/d/15_tlI6N2YlDPHEVUGA2GGRK-Dcw91vCK/view?usp=sharing',
      category: 'Network Security',
    },
    {
      id: 2,
      title: 'CyberHeroes: Network Analysis & Penetration Testing',
      image: '/img/certificate/CyberHeroes.webp',
      link: 'https://drive.google.com/file/d/120rkh_MM9pJAHWMD5J8mTaGVsVLOyS49/view?usp=sharing',
      category: 'Cybersecurity',
    },
    {
      id: 3,
      title: 'INACOMP : Cisco Networking Competition',
      image: '/img/certificate/InaComp.webp',
      link: 'https://drive.google.com/file/d/19x29YUqsFR_0_-IS2KrTE3hGAJTrl28s/view?usp=sharing',
      category: 'Competition',
    },
    {
      id: 4,
      title: 'Moklet Got Talent : Sound Engineering',
      image: '/img/certificate/SoundEngineer.webp',
      link: 'https://drive.google.com/file/d/1HgOqK45r38CBFTTrgMqTdFBLoUuvquGB/view',
      category: 'Sound Engineering',
    },
    {
      id: 6,
      title: 'IT Specialist: Cybersecurity',
      image: '/img/certificate/CyberSecurity.webp',
      link: 'https://drive.google.com/file/d/1zYWiWXrIiAigiF-y3EjwhWstF0ahr-U1/view?usp=sharing',
      category: 'IT Specialist',
    },
    {
      id: 7,
      title: 'METIC: Motion Video Editor',
      image: '/img/certificate/MotionVideoEditor.webp',
      link: 'https://drive.google.com/file/d/1QyR5R0SNUMjotD-EPNiG2mkZT_ThJERg/view?usp=sharing',
      category: 'Creative',
    },
    {
      id: 5,
      title: 'UKM Laos: Pelatihan CTF 2025',
      image: '/img/certificate/UKMLaos.webp',
      link: 'https://drive.google.com/file/d/1H5oNWylYyFakv4919d6U9TvLvUC72znk/view?usp=sharing',
      category: 'Pelatihan',
    }
  ];

  const categories = [
    { id: 'all', label: 'All Certificate' }
  ];

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  // Carousel always shows all certificates, sorted by id descending
  const carouselCertificates = [...certificates].sort((a, b) => b.id - a.id);
  
  // Grid in modal uses filtered certificates
  const gridCertificates = [...filteredCertificates].sort((a, b) => b.id - a.id);

  // Auto-scroll carousel in opposite direction (right to left from start)
  useEffect(() => {
    if (showAllCertificates) return;
    
    const interval = setInterval(() => {
      setScrollPosition(prev => prev - 1); // Opposite direction
    }, 30);

    return () => clearInterval(interval);
  }, [showAllCertificates]);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'cybersecurity': return 'bg-[#ff0099]';
      case 'network': return 'bg-[#00bbff]';
      case 'creative': return 'bg-[#ff9d00]';
      case 'competition': return 'bg-[#3700ff]';
      default: return 'bg-white/20';
    }
  };

  // Extract Google Drive file ID and create preview URL
  const getGoogleDrivePreviewUrl = (link: string) => {
    const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return link;
  };

  return (
    <section id="certificates" className="py-16 bg-[#050505] overflow-hidden">
      <div className="max-w-[1112px] mx-auto px-[20px]">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-bold text-white font-montserrat uppercase">
            Certifications & Awards
          </h2>
        </div>

        {/* Scrolling Carousel - Opposite direction */}
        <div className="relative mb-8 overflow-hidden">
          <div 
            className="flex gap-4"
            style={{
              transform: `translateX(${scrollPosition % (carouselCertificates.length * 360)}px)`,
              width: `${carouselCertificates.length * 2 * 360}px`
            }}
          >
            {/* Duplicate items for infinite scroll */}
            {[...carouselCertificates, ...carouselCertificates].map((cert, index) => (
              <div 
                key={`${cert.id}-${index}`}
                className="bg-[#d9d9d9] rounded-[5px] h-[180px] w-[340px] flex-shrink-0 cursor-pointer overflow-hidden group relative"
                onClick={() => setSelectedCertificate(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Award className="w-12 h-12 text-white mb-2" />
                  <span className={`text-[10px] text-white px-2 py-1 rounded ${getCategoryColor(cert.category)}`}>
                    {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certificate Button with Bracket Hover Effect */}
        <div className="flex justify-center">
          <button
            onClick={openModal}
            onMouseEnter={() => setHoveredButton('all')}
            onMouseLeave={() => setHoveredButton(null)}
            className="text-[12px] text-white font-consolas hover:opacity-80 transition-all"
          >
            <span className={`transition-opacity duration-200 ${hoveredButton === 'all' ? 'opacity-100' : 'opacity-0'}`}>[</span>
            All Certificate
            <span className={`transition-opacity duration-200 ${hoveredButton === 'all' ? 'opacity-100' : 'opacity-0'}`}>]</span>
          </button>
        </div>
      </div>

      {/* All Certificates Modal */}
      {showAllCertificates && (
        <div className={`fixed inset-0 bg-black/90 z-50 overflow-y-auto transition-opacity duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`max-w-[1112px] mx-auto px-[20px] py-8 transition-all duration-300 ${isModalVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[36px] font-bold text-white font-montserrat uppercase">
                All Certificates
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

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {gridCertificates.map((cert, index) => (
                <div 
                  key={cert.id}
                  className={`bg-[#d9d9d9] rounded-[5px] h-[180px] cursor-pointer overflow-hidden group relative transition-all duration-500 ${isModalVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <Award className="w-10 h-10 text-white mb-2" />
                    <p className="text-white text-[12px] text-center font-montserrat mb-2">{cert.title}</p>
                    <span className={`text-[10px] text-white px-2 py-1 rounded ${getCategoryColor(cert.category)}`}>
                      {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Certificate Preview */}
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src={getGoogleDrivePreviewUrl(selectedCertificate.link)}
                width="100%"
                height="500"
                allow="autoplay"
                className="border-0"
                title={selectedCertificate.title}
              />
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-white font-montserrat font-bold text-xl">{selectedCertificate.title}</h3>
              <span className={`inline-block text-[10px] text-white px-2 py-1 rounded mt-2 ${getCategoryColor(selectedCertificate.category)}`}>
                {selectedCertificate.category.charAt(0).toUpperCase() + selectedCertificate.category.slice(1)}
              </span>
              <div className="mt-4">
                <a 
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00bbff] font-consolas text-sm hover:opacity-80"
                >
                  Open in Google Drive <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
