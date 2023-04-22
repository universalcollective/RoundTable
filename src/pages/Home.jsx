import React, { useEffect, useRef, useState } from 'react';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import { useNightMode, NightModeProvider } from '../utils/NightModeContext';
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useInView } from 'react-intersection-observer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.5 });
  const [featuresBlocksRef, featuresBlocksInView] = useInView({ threshold: 0.5 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.5 });
  const [newsletterRef, newsletterInView] = useInView({ threshold: 0.5 });
  const { isNightMode, setIsNightMode } = useNightMode();

  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState('down');

  const handleScroll = (e) => {
    const newIndex = e.target.scrollTop > activeSection ? activeSection + 1 : activeSection - 1;
    setDirection(e.target.scrollTop > activeSection ? 'down' : 'up');
    setActiveSection(newIndex);
  };

  const sections = [
    { id: 0, name: 'hero', ref: heroRef, component: <HeroHome isNightMode={isNightMode} /> },
    { id: 1, name: 'features', ref: featuresRef, component: <FeaturesHome /> },
    { id: 2, name: 'featuresBlocks', ref: featuresBlocksRef, component: <FeaturesBlocks /> },
    { id: 3, name: 'testimonials', ref: testimonialsRef, component: <Testimonials /> },
    { id: 4, name: 'newsletter', ref: newsletterRef, component: <Newsletter /> },
  ];

  return (
    <NightModeProvider value={{ isNightMode, setIsNightMode }}>
      <div className={`flex flex-col min-h-screen overflow-hidden ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
        <div className="custom-scrollbar" onScroll={handleScroll}>
          <Header />
          <main className="flex-grow">
            <TransitionGroup component={null}>
              {sections.map((section) => (
                <CSSTransition key={section.id} timeout={800} classNames={`fade-${direction}`}>
                  <section
                    ref={section.ref}
                    className={`wrapper section ${activeSection === section.id ? 'visible' : ''} ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {section.component}
                  </section>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </main>
          <Banner />
          <Footer />
        </div>
      </div>
    </NightModeProvider>
  );
}

export default Home;
