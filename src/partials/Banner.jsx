import React, { useState, useEffect } from "react";
import { useNightMode } from "../utils/NightModeContext";

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(false);
  const { isNightMode } = useNightMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {bannerOpen && (
        <div
          className={`fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50 ${
            isNightMode
              ? "bg-gray-100 text-gray-700"
              : "bg-slate-800 text-gray-100"
          } rounded-lg`}
          style={{ zIndex: 100 }}
        >
          <div
            className={`${
              isNightMode ? "bg-gray-100 text-gray-700" : "bg-slate-800 text-gray-100"
            } text-sm p-3 md:rounded shadow-lg flex justify-between`}
          >
            <div
              className={`${isNightMode ? "bg-gray-100 text-custom-100" : "bg-slate-800 text-gray-100"
                } inline-flex`}
            >
              <span className="px-1.5">Questions?</span>{" "}
              <a
                className="hover:text-custom-100 font-medium hover:underline"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                Join our community today!
              </a>
            </div>
            <button
              className={`${isNightMode ? "bg-gray-100 text-custom-100" : "bg-slate-800 text-gray-100"
                } hover:text-slate-400 pl-2 ml-3 border-l border-gray-700`}
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path
                  d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
