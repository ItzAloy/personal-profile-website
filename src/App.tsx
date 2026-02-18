import React, { Suspense, lazy, useState, useCallback, useMemo, memo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import { SkeletonSection } from './components/Skeleton';
import './App.css';

// Lazy load sections below the fold for better initial load
const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Memoized loading fallback component
const SectionLoader: React.FC = memo(() => (
  <SkeletonSection className="bg-[#050505]" />
));

SectionLoader.displayName = 'SectionLoader';

// Memoized footer loader
const FooterLoader: React.FC = memo(() => (
  <div className="h-20 bg-[#050505]" />
));

FooterLoader.displayName = 'FooterLoader';

// Main content component - memoized for performance
const MainContent: React.FC = memo(() => {
  return (
    <div className="App bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Certificates />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<FooterLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
});

MainContent.displayName = 'MainContent';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Memoize the splash screen props
  const splashScreenProps = useMemo(() => ({
    onLoadComplete: handleLoadComplete,
    minimumLoadTime: 2500,
  }), [handleLoadComplete]);

  return (
    <>
      {isLoading && <SplashScreen {...splashScreenProps} />}
      {!isLoading && <MainContent />}
    </>
  );
}

export default App;
