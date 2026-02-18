import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] h-[65px] w-full">
      <div className="max-w-[1440px] mx-auto px-[164px] h-full flex items-center justify-between">
        {/* Left - Copyright */}
        <div className="text-[10px] text-white font-consolas">
          © 2026 ItzAloy. All rights reserved.
        </div>

        {/* Center - Credit Notice */}
        <div className="text-[10px] text-white font-consolas text-center">
          Please credit me as "itzaloy.aep" when using my work. Tag me on YouTube or add my Instagram link.
        </div>

        {/* Right - Made With */}
        <div className="text-[10px] text-white font-consolas">
          Made using React, TypeScript & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
