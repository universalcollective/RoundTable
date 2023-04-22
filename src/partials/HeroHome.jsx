import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useNightMode } from "../utils/NightModeContext";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const phrases = [
  " possibilities",
  " journey",
  " creativity",
  " exploration",
  " expression",
  " potential",
  " styles",
  " experimentation",
  " innovation",
  " inspiration",
  " discovery",
  " talent",
  " imagination",
  " stories",
  " masterpieces",
  " artistry",
  " sound",
  " music",
  " soundscapes",
  // add more phrases here
];

const shuffledPhrases = shuffleArray(phrases);

function HeroHome() {
  const [fadeInState, setFadeInState] = useState({
    title: false,
    description: false,
    button1: false,
    button2: false,
  });
  const { isNightMode } = useNightMode();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, title: true }));
    }, 500);

    const timer2 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, description: true }));
    }, 1000);

    const timer3 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, button1: true }));
    }, 1500);

    const timer4 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, button2: true }));
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section
      className={`relative ${
        isNightMode ? "bg-slate-800 text-gray-100" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-10xl mx-auto px-4 sm:px-6 flex items-center justify-center h-screen">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-18">
            <div
              className={`text-3xl md:text-5xl font-normal leading-tighter tracking-tighter mb-4 fade-in ${
                fadeInState.title ? "fade-in-enter-active" : ""
              }`}
            >
              <div style={{ display: "inline-flex" }}>
                <span className="font-extrabold">Endless&nbsp;</span>
                <Typewriter
                  options={{
                    strings: shuffledPhrases,
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                  style={{ fontWeight: "normal" }}
                />
              </div>
            </div>

            <div
              className={`max-w-4xl mx-auto ${
                isNightMode
                  ? "bg-slate-800 text-gray-100"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <p
                className={`text-xl mb-8 fade-in ${
                  fadeInState.description ? "fade-in-enter-active" : ""
                }`}
              >
                Unleash your full potential with Round Table - the ultimate
                destination for independent creators to express their artistic
                freedom and take center stage.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="900"
              >
                <div>
                  <a
                    className={`btn text-white bg-custom-100 hover:bg-gray-200 w-full mb-4 sm:w-auto sm:mb-0 sm:mr-4 fade-in ${
                      fadeInState.button1 ? "fade-in-enter-active" : ""
                    }`}
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
                <div>
                  <a
                    className={`btn text-custom-100 bg-gray-200 hover:bg-custom-100 hover:text-gray-100 w-full sm:w-auto fade-in ${
                      fadeInState.button2 ? "fade-in-enter-active" : ""
                    }`}
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
