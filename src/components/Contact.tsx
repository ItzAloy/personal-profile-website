import React from 'react';
import { Instagram } from 'lucide-react';
import FadeContent from './FadeContent';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#050505] py-16">
      <div className="max-w-[1112px] mx-auto px-[20px] w-full">
        {/* Section Header */}
        <FadeContent blur duration={0.6} delay={0.1} yOffset={30}>
          <div className="text-center mb-8">
            <h2 className="text-[36px] font-bold text-white font-montserrat uppercase">
              Want to collaborate with me?
            </h2>
            <p className="text-[16px] text-white font-montserrat mt-4">
              Choose your preferred way to start the project
            </p>
          </div>
        </FadeContent>

        {/* Action Buttons */}
        <FadeContent blur duration={0.8} delay={0.2} yOffset={40}>
          <div className="flex justify-center gap-6 flex-wrap mb-8">
            {/* Fill Commission Form Button */}
            <button
              onClick={() => window.open('https://tally.so/r/Bzx1Ge', '_blank')}
              className="bg-white rounded-[5px] h-[100px] w-[350px] px-6 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <span className="text-[24px] font-bold text-black font-montserrat uppercase">
                FILL COMMISION FORM
              </span>
              <span className="text-[12px] text-black font-montserrat">
                For serious inquires & priority slot
              </span>
            </button>

            {/* DM Instagram Button */}
            <button
              onClick={() => window.open('https://instagram.com/aloykucing1', '_blank')}
              className="border-2 border-white/80 rounded-[5px] h-[100px] w-[350px] px-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Instagram className="w-6 h-6 text-white" />
                <span className="text-[24px] font-bold text-white font-montserrat uppercase">
                  DM INSTAGRAM
                </span>
              </div>
              <span className="text-[12px] text-white font-montserrat">
                Quick questions & consultation
              </span>
            </button>
          </div>
        </FadeContent>

        {/* Business Email */}
        <FadeContent blur duration={0.6} delay={0.3} yOffset={20}>
          <div className="text-center">
            <p className="text-[12px] text-white font-montserrat">
              Business/Sponsorship only : aloyberkarya@gmail.com
            </p>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Contact;
