import React, { useState, useEffect, useCallback } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onLoadComplete: () => void;
  minimumLoadTime?: number;
}

// Critical assets to preload
const CRITICAL_IMAGES = [
  '/img/Christmast_Graphic.webp',
  '/img/Lyric_Animation.webp',
  '/img/WowSkill_Website.webp',
  '/img/davinci-resolve.png',
];

const CERTIFICATE_IMAGES = [
  '/img/certificate/Fortinet.webp',
  '/img/certificate/CyberHeroes.webp',
  '/img/certificate/InaComp.webp',
  '/img/certificate/SoundEngineer.webp',
  '/img/certificate/CyberSecurity.webp',
  '/img/certificate/MotionVideoEditor.webp',
  '/img/certificate/UKMLaos.webp',
];

// Font URLs to preload
const FONTS = [
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
];

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onLoadComplete, 
  minimumLoadTime = 2000 
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [isExiting, setIsExiting] = useState(false);

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Continue even if image fails
      img.src = src;
    });
  }, []);

  const preloadFont = useCallback((url: string): Promise<void> => {
    return new Promise((resolve) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = url;
      link.onload = () => resolve();
      link.onerror = () => resolve();
      document.head.appendChild(link);
      // Resolve after a short delay as fonts load asynchronously
      setTimeout(resolve, 100);
    });
  }, []);

  useEffect(() => {
    const loadAssets = async () => {
      const startTime = Date.now();
      const allAssets = [...FONTS, ...CRITICAL_IMAGES, ...CERTIFICATE_IMAGES];
      const totalAssets = allAssets.length;
      let loadedCount = 0;

      // Update loading text phases
      const textPhases = [
        'Initializing...',
        'Loading fonts...',
        'Loading images...',
        'Preparing content...',
        'Almost ready...',
      ];

      // Load fonts first
      setLoadingText(textPhases[1]);
      for (const font of FONTS) {
        await preloadFont(font);
        loadedCount++;
        setProgress(Math.round((loadedCount / totalAssets) * 100));
      }

      // Load critical images
      setLoadingText(textPhases[2]);
      const imagePromises = [...CRITICAL_IMAGES, ...CERTIFICATE_IMAGES].map(async (src) => {
        await preloadImage(src);
        loadedCount++;
        setProgress(Math.round((loadedCount / totalAssets) * 100));
      });

      await Promise.all(imagePromises);

      setLoadingText(textPhases[3]);
      setProgress(100);

      // Ensure minimum load time for smooth UX
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

      setTimeout(() => {
        setLoadingText(textPhases[4]);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onLoadComplete, 600); // Wait for exit animation
        }, 300);
      }, remainingTime);
    };

    loadAssets();
  }, [preloadImage, preloadFont, minimumLoadTime, onLoadComplete]);

  return (
    <div className={`splash-screen ${isExiting ? 'splash-exit' : ''}`}>
      <div className="splash-content">
        {/* Logo/Name */}
        <div className="splash-logo">
          <span className="splash-logo-text">Replayer</span>
          <span className="splash-logo-dot">.</span>
        </div>

        {/* Loading bar */}
        <div className="splash-loader">
          <div className="splash-loader-track">
            <div 
              className="splash-loader-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="splash-progress-info">
            <span className="splash-loading-text">{loadingText}</span>
            <span className="splash-progress-number">{progress}%</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="splash-decoration">
          <div className="splash-line splash-line-1" />
          <div className="splash-line splash-line-2" />
        </div>
      </div>

      {/* Background grid effect */}
      <div className="splash-grid" />
    </div>
  );
};

export default SplashScreen;
