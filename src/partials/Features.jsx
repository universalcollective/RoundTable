import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import discover from "../images/discover.gif"
import collab from "../images/collab.png"
import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import { useNightMode } from "../utils/NightModeContext";

function Features() {
  const [tab, setTab] = useState(1);
  const tabs = useRef(null);
  const { isNightMode } = useNightMode();

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.maxHeight =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  const [fadeInState, setFadeInState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInState(true);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-enter-active");
          }
        });
      },
      { threshold: 0.5 }
    );
    const targets = document.querySelectorAll(".fade-in");
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative ${
        isNightMode ? "bg-slate-800 text-gray-100" : "bg-gray-100 text-gray-700"
      }`}
    >
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className={`absolute inset-0 bg-gray-100 pointer-events-none mb-16 ${
          isNightMode
            ? "bg-slate-800 text-gray-100"
            : "bg-gray-100 text-gray-700"
        }`}
        aria-hidden="true"
      ></div>
      <div
        className={`absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2 ${
          isNightMode
            ? "bg-slate-800 text-gray-100"
            : "bg-gray-100 text-gray-700"
        }`}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div
            className={`max-w-3xl mx-auto text-center pb-12 md:pb-16 fade-in`}
          >
            <h1
              className={`h2 mb-4 ${
                isNightMode
                  ? "bg-slate-800 text-gray-100"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Dive into Creative Opportunities
            </h1>
            <p className="text-xl">
              Embrace a world of collaboration, innovation, and artistic expression.
            </p>
          </div>

          {/* Section content */}
          <div
            className={`md:grid md:grid-cols-12 md:gap-6 ${
              isNightMode
                ? "bg-slate-800 text-gray-100"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-2 lg:pr-12 xl:pr-16 mb-8">
      <h3 className="h3 mb-3" style={{whiteSpace: 'nowrap'}}>
        Limitless Inspiration, Delivered Monthly
      </h3>
      <p className="text-xl" style={{whiteSpace: 'nowrap'}}>
        Unleash your creative potential through collaboration, exploration, and growth.
      </p>
    </div>
              
              {/* Tabs buttons */}
              <div className="grid grid-cols-1 grid-rows-3 gap-3">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-1 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-300 hover:shadow-lg"
                      : "bg-gray-300 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-custom-100">
                      Discover
                    </div>
                    <div className="text-gray-600">
                    Explore a diverse selection of creative content from artists, musicians, and visionaries, 
                    curated monthly for RoundTable members.
                    </div>
                  </div>
                  <div
                    className={`flex justify-center items-center w-8 h-8 ${
                      isNightMode
                        ? "bg-gray-100 text-custom-100"
                        : "bg-gray-100 text-gray-700"
                    } rounded-full shadow flex-shrink-0 ml-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </div>
                </a>
                <div className="flex justify-center ml-6">
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-1 ${
                      tab !== 2
                        ? "bg-white shadow-md border-gray-300 hover:shadow-lg"
                        : "bg-gray-300 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(2);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1 text-custom-100 ">
                        Collaborate
                      </div>
                      <div className="text-gray-600">
                      Join forces with fellow creatives, share ideas, and embark on collaborative projects within the RoundTable community.
                      </div>
                    </div>
                    <div
                      className={`flex justify-center items-center w-8 h-8 rounded-full ${
                        isNightMode
                          ? "bg-gray-100 text-custom-100"
                          : "bg-gray-100 text-gray-700"
                      } shadow flex-shrink-0 ml-3`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="flex justify-center ml-12">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-500 ease-in-out mb-1 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-300 hover:shadow-lg"
                      : "bg-gray-300 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-custom-100">
                      Elevate
                    </div>
                    <div className="text-gray-600">
                    Enhance your skills, grow your network, and unlock new opportunities as you gain access to exclusive events and resources.
                    </div>
                  </div>

                  <div
                    className={`flex justify-center items-center w-8 h-8 ${
                      isNightMode
                        ? "bg-gray-100 text-custom-100"
                        : "bg-gray-100 text-gray-700"
                    } rounded-full shadow flex-shrink-0 ml-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clip-rule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                  </div>
                </a>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-2 mt-40"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={discover}
                      width="500"
                      height="562"
                      alt="Discover"
                    />
                    
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative flex items-center justify-center">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={collab}
                      width="500"
                      height="462"
                      alt="Collaborate"
                    />
                    
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={FeaturesElement}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
