import React from 'react';
import { ParticleCard } from './MagicBento';
import FadeContent from './FadeContent';

const Services: React.FC = () => {
  const services = [
    {
      title: 'SIMPLE MV',
      price: '200k',
      description: 'Basic music video with simple transitions and effects. Perfect for beginners or budget-friendly projects.',
      features: ['Simple transitions', 'Basic color grading', 'Text overlays', '5-7 days delivery']
    },
    {
      title: 'COMPLEX MV',
      price: '300k',
      description: 'Advanced music video with complex effects, motion graphics and professional editing.',
      features: ['Advanced effects', 'Motion graphics', 'Professional color grading', '7-10 days delivery']
    },
    {
      title: 'LYRIC VIDEO',
      price: '100k',
      description: 'Clean and creative text-based lyric animation synchronized with your music.',
      features: ['Typography animation', 'Sync with music', 'Custom fonts', '3-5 days delivery']
    }
  ];

  const additionalInfo = [
    { title: 'Additional Background Assets', description: 'If image is PNG/no BG', price: '+20k' },
    { title: 'Extra Pictures', description: 'Max MV is 10 pictures', price: '+50k' },
    { title: 'Rush Delivery', description: '1-3 days delivery time', price: '2x Price' }
  ];

  const rulesTerms = [
    { icon: '📁', title: 'Provide Materials', description: 'Character Illustrations, Backgrounds (HD recommended)' },
    { icon: '📝', title: 'Credits & References', description: 'Parting lyric, MV references (if you have)' },
    { icon: '🏷️', title: 'Credit Required', description: 'Credit me as "ItzAloy" on YouTube/Instagram' },
    { icon: '⏱️', title: 'Processing Time', description: 'Video processing takes around 7 days' },
    { icon: '💳', title: 'Payment Policy', description: 'Payment before final video delivery' },
    { icon: '🚀', title: 'Rush Orders', description: 'Rush MV 1-3 days available (2x price)' }
  ];

  return (
    <section id="services" className="py-8 bg-[#050505]">
      <div className="max-w-[1112px] mx-auto px-[20px]">
        {/* Section Header */}
        <FadeContent blur duration={0.6} delay={0.1} yOffset={30}>
          <div className="text-center mb-8">
            <h2 className="text-[36px] font-bold text-white font-montserrat uppercase">
              Provide Services
            </h2>
            <p className="text-[14px] text-white/60 font-montserrat mt-2">
              Professional video editing services for your creative needs
            </p>
          </div>
        </FadeContent>

        {/* Service Cards - Clean Design */}
        <FadeContent blur duration={0.8} delay={0.2} yOffset={40}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <ParticleCard
                key={index}
                className="rounded-[8px] h-full"
                style={{}}
                glowColor="0, 187, 255"
                enableTilt={true}
                particleCount={8}
              >
                <div className="border border-white/20 rounded-[8px] p-6 h-full bg-[#050505] hover:border-white/50 transition-all duration-300">
                  {/* Price Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[20px] font-bold text-white font-montserrat">{service.title}</h3>
                    <span className="text-[24px] font-bold text-[#00bbff] font-montserrat">{service.price}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[13px] text-white/70 font-montserrat mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px] text-white/60 font-montserrat">
                        <span className="w-1 h-1 bg-[#00bbff] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ParticleCard>
            ))}
          </div>
        </FadeContent>

        {/* Additional Info & Rules - Compact Layout */}
        <FadeContent blur duration={0.8} delay={0.3} yOffset={40}>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Additional Info */}
            <ParticleCard
              className="rounded-[8px] h-full"
              style={{}}
              glowColor="255, 157, 0"
              enableTilt={true}
              particleCount={8}
            >
              <div className="border border-white/10 rounded-[8px] p-6 h-full bg-[#050505]">
                <h3 className="text-[18px] font-bold text-white font-montserrat uppercase mb-4">
                  Additional Pricing
                </h3>
                <div className="space-y-3">
                  {additionalInfo.map((info, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <div>
                        <span className="text-[13px] text-white font-montserrat">{info.title}</span>
                        <p className="text-[11px] text-white/50 font-montserrat">{info.description}</p>
                      </div>
                      <span className="text-[14px] font-bold text-[#ff9d00] font-montserrat">{info.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ParticleCard>

            {/* Rules & Terms */}
            <ParticleCard
              className="rounded-[8px] h-full"
              style={{}}
              glowColor="132, 0, 255"
              enableTilt={true}
              particleCount={8}
            >
              <div className="border border-white/10 rounded-[8px] p-6 h-full bg-[#050505]">
                <h3 className="text-[18px] font-bold text-white font-montserrat uppercase mb-4">
                  Terms & Conditions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {rulesTerms.map((rule, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[16px]">{rule.icon}</span>
                      <div>
                        <span className="text-[12px] text-white font-montserrat font-medium block">{rule.title}</span>
                        <p className="text-[10px] text-white/50 font-montserrat">{rule.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ParticleCard>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Services;
