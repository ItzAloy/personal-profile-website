import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-[164px] py-[20px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M45.9083 8.35062C46.8213 11.9134 43.8668 24.166 37.417 28.4089C33.7597 36.2519 21.5102 35.7494 18.2661 43.1195C17.6687 46.1134 17.6137 48.6476 17.5165 51.0884C17.5055 51.0593 16.5425 48.5131 16.8308 44.2055C11.7538 38.7123 12.5348 30.7033 16.6764 25.1357C13.7296 31.6801 14.0815 37.4973 17.0299 42.2952C17.4345 39.4578 18.3883 36.0387 20.3517 32.1951C25.5486 22.0216 34.872 19.6008 34.8986 19.5939C32.2803 21.5982 26.8361 23.9914 22.5333 31.914C20.9679 34.7964 19.912 37.3092 19.1916 39.5588C24.3594 34.5776 30.8923 34.8801 35.6503 29.5354C33.4456 30.4832 32.1651 30.7797 29.7654 30.7037C38.5688 29.5878 43.0443 20.5865 44.6847 11.1387C38.9512 15.3114 28.5455 12.1496 22.7483 20.7542C27.0739 10.2954 40.8233 14.122 45.9083 8.35062ZM32.1657 10.9224C24.7995 13.4666 18.9914 21.0178 16.594 32.9794C16.2697 20.7598 23.9544 11.0816 32.1657 10.9224Z" fill="white"/>
              </svg>
            </button>
          </div>

          {/* Contact Me Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-2 border border-white rounded-[5px] text-white text-sm font-medium font-montserrat hover:bg-white hover:text-[#050505] transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
