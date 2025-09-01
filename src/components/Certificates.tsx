import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { title } from 'process';

const Certificates: React.FC = () => {
  // Sample certificates - you can replace these with actual certificates
  const certificates = [
    {
      id: 1,
      title: 'Fortinet: Network Security',
      issuer: 'Fortinet',
      date: '2025',
      description: 'Network security certification focusing on Fortinet technologies',
      image: '/img/certificate/Fortinet.webp',
      link: 'https://drive.google.com/drive/folders/1FNKyT4D38OjlOw8UKF1reXCuzFmy7Atz?usp=sharing',
      skills: ['Network Security', 'Firewall Management', 'Threat Detection']
    },
    {
      id: 2,
      title: 'CyberHeroes: Network Analysis & Penetration Testing',
      issuer: 'UKL',
      date: '2025',
      description: 'Ethical Hacking and Penetration Testing',
      image: '/img/certificate/CyberHeroes.webp',
      link: 'https://drive.google.com/drive/folders/1FNKyT4D38OjlOw8UKF1reXCuzFmy7Atz?usp=sharing',
      skills: ['Ethical Hacking', 'Penetration Testing', 'Cybersecurity']
    },
    {
      id: 3,
      title: 'INACOMP : Cisco Networking Competition',
      issuer: 'INACOMP',
      date: '2025',
      description: 'Participate as a PARTICIPANT in the Inacomp 2025 Event in the Context of UNJ\'s 61st Anniversary',
      image: '/img/certificate/InaComp.webp',
      link: 'https://drive.google.com/drive/folders/1FNKyT4D38OjlOw8UKF1reXCuzFmy7Atz?usp=sharing',
      skills: ['Networking', 'Cisco Technologies', 'Competition']
    },
        {
      id: 4,
      title: 'Moklet Got Talent - Sound Engineering',
      issuer: 'MGT',
      date: '2024',
      description: 'Creative character education activities through Moklet Got Talent (MGT) by the Moklet Art Club (MAC) sub-organ of SMK Telkom Malang for the 2023/2024 academic year.',
      image: '/img/certificate/SoundEngineer.webp',
      link: 'https://drive.google.com/drive/folders/1FNKyT4D38OjlOw8UKF1reXCuzFmy7Atz?usp=sharing',
      skills: ['Sound Engineering', 'Audio Production', 'Creative Arts']
    },
    {
      id: 5,
      title: 'UKM Laos: Pelatihan CTF 2025',
      issuer: 'UKM Laos',
      date: '2025',
      description: 'CTF training program organized by UKM Laos',
      image: '/img/certificate/UKMLaos.webp',
      link: 'https://drive.google.com/drive/folders/1FNKyT4D38OjlOw8UKF1reXCuzFmy7Atz?usp=sharing',
      skills: ['Capture The Flag', 'Cybersecurity', 'Network Defense']
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Certifications and achievements I have received
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary-500/20 hover:border-primary-500/40"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-full p-2 border border-primary-500/30">
                    <Award className="w-5 h-5 text-primary-400" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-primary-400 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{cert.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm font-medium border border-primary-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => window.open(cert.link, '_blank')}
                  className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Certificate CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 rounded-2xl text-white max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-white/90 mb-6">
              I continue to improve my skills and earn new certifications to stay up to date with the latest techniques and technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
