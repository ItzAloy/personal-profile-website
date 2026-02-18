import React, { useRef } from 'react';
// @ts-ignore
import DarkVeil from './DarkVeil.jsx';
import VariableProximity from './VariableProximity';
import FadeContent from './FadeContent';
import './DarkVeil.css';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#050505] pt-20 relative overflow-hidden">
      {/* DarkVeil Background Effect with #050505 base */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#050505]">
        <DarkVeil
          hueShift={35}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      
      <div ref={containerRef} className="text-center px-4 relative z-10">
        {/* Main Title with Variable Proximity Effect */}
        <div className="mb-4">
          <VariableProximity
            label="Hi, I'm Aloy"
            className="text-[64px] font-bold text-white font-montserrat"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={150}
            falloff="gaussian"
          />
        </div>

        {/* Subtitle - keeping original Figma design */}
        <FadeContent blur duration={0.6} delay={0.2} yOffset={15}>
          <p className="text-[14px] text-white font-montserrat mb-6 text-center">
            Just someone who likes making {' '}
            <span className="font-semibold text-[#00bbff]">AMV</span>{' '}
          </p>
        </FadeContent>

        {/* Description - keeping original Figma design */}
        <FadeContent blur duration={0.8} delay={0.3} yOffset={20}>
          <p className="text-[14px] text-white font-montserrat leading-relaxed max-w-[424px] mx-auto mb-8 text-center">
            I have 2 years experience of video editing, capable of using certain editing software such as{' '}
            <span className="font-semibold text-[#3700ff]">Adobe After Effect</span>,{' '}
            <span className="font-semibold text-[#bf00ff]">Adobe Premiere Pro</span>, and{' '}
            <span className="font-semibold text-[#ff9d00]">DaVinci Resolve</span>.
          </p>
        </FadeContent>

        {/* Learn More Button */}
        <button 
          onClick={scrollToAbout}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-[12px] text-white font-consolas hover:opacity-80 transition-all"
        >
          <span className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>[</span>
          Learn More About Me
          <span className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>]</span>
        </button>

        {/* Arrow Down */}
        <div className="mt-8">
          <button onClick={scrollToAbout} className="text-white hover:opacity-80 transition-opacity animate-bounce">
            <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0V22M4 22L1 19M4 22L7 19" stroke="white" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
