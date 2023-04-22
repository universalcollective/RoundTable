import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [fadeInState, setFadeInState] = useState({
    status: "",
    header: "",
    paragraph: "",
    buttons: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, status: "visible" }));
    }, 200);

    const timer2 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, header: "visible" }));
    }, 800);

    const timer3 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, paragraph: "visible" }));
    }, 1200);

    const timer4 = setTimeout(() => {
      setFadeInState((prevState) => ({ ...prevState, buttons: "visible" }));
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 500ms, transform 500ms;
        }

        .visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <main
        className={`grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 ${
          isNightMode
            ? "bg-slate-800 text-custom-700"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="text-center">
          <p
            className={`text-base font-semibold ${
              isNightMode ? "text-custom-700" : "text-gray-700"
            } fade-in ${fadeInState.status}`}
          >
            404
          </p>
          <h1 className={`mt-4 text-3xl font-bold tracking-tight sm:text-5xl fade-in ${fadeInState.header}`}>
            Page not found
          </h1>
          <p className={`mt-6 text-base leading-7 fade-in ${fadeInState.paragraph}`}>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className={`mt-10 flex items-center justify-center gap-x-6 fade-in ${fadeInState.buttons}`}>
            <a
              href="/"
              className="min-w-max rounded-md bg-custom-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
            >
              Go back home
            </a>
            <a
              href="#"
              className={`text-sm font-semibold ${
                isNightMode ? "text-custom-700" : "text-gray-700"
              }`}
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
            <button
              type="button"
              className={`px-2 py-1 rounded-md text-gray-900 ${
                isNightMode ? "bg-slate-800" : "bg-gray-100"
              }`}
              onClick={() => setIsNightMode(!isNightMode)}
            >
              {isNightMode ? (
                <Icon icon={"uil:moon"} className="h-5 w-5 text-gray-100" />
              ) : (
                <Icon icon={"uil:sun"} className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

