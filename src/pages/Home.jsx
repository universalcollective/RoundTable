import React, { useEffect, useRef, useState } from "react";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import { useNightMode, NightModeProvider } from "../utils/NightModeContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const featuresBlocksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);
  const { isNightMode, setIsNightMode } = useNightMode();

  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState("down");
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const sections = [
    {
      id: 0,
      name: "hero",
      ref: heroRef,
      component: <HeroHome isNightMode={isNightMode} />,
    },
    { id: 1, name: "features", ref: featuresRef, component: <FeaturesHome /> },
    {
      id: 2,
      name: "featuresBlocks",
      ref: featuresBlocksRef,
      component: <FeaturesBlocks />,
    },
    {
      id: 3,
      name: "testimonials",
      ref: testimonialsRef,
      component: <Testimonials />,
    },
    {
      id: 4,
      name: "newsletter",
      ref: newsletterRef,
      component: <Newsletter />,
    },
  ];

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".custom-scrollbar"),
      smooth: true,
    });

    const handleLocomotiveScroll = (e) => {
      sections.forEach((section, index) => {
        const rect = section.ref.current.getBoundingClientRect();
        const inView =
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5;

        if (inView) {
          setActiveSection(index);
        }
      });

      if (window.pageYOffset > 100) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    scroll.on("scroll", handleLocomotiveScroll);

    return () => {
      if (scroll) {
        scroll.off("scroll", handleLocomotiveScroll);
        scroll.destroy();
      }
    };
  }, []);

  return (
    <NightModeProvider value={{ isNightMode, setIsNightMode }}>
      <div
        className={`flex flex-col min-h-screen overflow-hidden ${
          isNightMode
            ? "bg-slate-800 text-gray-100"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        <Header />
        <Banner />
        <div className="custom-scrollbar">
          
          <main className="flex-grow">
            <TransitionGroup component={null}>
              {sections.map((section) => (
                <CSSTransition
                  key={section.id}
                  timeout={800}
                  classNames={`fade-${direction}`}
                >
                  <section
                    ref={section.ref}
                    className={`wrapper section ${
                      activeSection === section.id ? "visible" : ""
                    } ${
                      isNightMode
                        ? "bg-slate-800 text-gray-100"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {section.component}
                  </section>
                </CSSTransition>
              ))}
             
            </TransitionGroup>
            
          </main>
          <Footer />
        </div>

      </div>
      
    </NightModeProvider>
  );

}

export default Home;
