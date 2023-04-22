import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo-red.png';
import { Icon } from '@iconify/react';
import { useNightMode } from '../utils/NightModeContext';


function Header() {
  const [top, setTop] = useState(true);
  const location = useLocation();
  const { isNightMode, setisNightMode } = useNightMode();

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-70 transition duration-300 ease-in-out ${
        !top && "backdrop-blur-sm shadow-lg"
      } ${isNightMode ? "bg-slate-800 text-gray-100" : ""}`}
    >
      
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
        <div className="flex-shrink-0 mr-4">
  <Link to="/" className="block" aria-label="Round Table">
    <div
      className="w-16 h-16 flex items-center justify-center rounded-full logo" // Increase size and add hover effect
    >
      <img
        src={logo}
        alt="Round Table"
        className="w-10 h-8"
        style={{ margin: "5px" }}
      />
    </div>
  </Link>
</div>

          <nav className="flex flex-grow">
            
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* {location.pathname !== '/signin' && (
                <li>
                  <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                </li>
              )} */}
              <button
                type="button"
                className={`px-2 py-1 rounded-md text-gray-900${
                  isNightMode ? " bg-slate-800" : " bg-gray-100"
                }`}
                onClick={() => setisNightMode(!isNightMode)}
              >
                {isNightMode ? (
                  <Icon icon={"uil:moon"} className="h-5 w-5 text-gray-100" />
                ) : (
                  <Icon
                    icon={"uil:sun"}
                    className={`h-5 w-5${isNightMode ? " text-gray-100" : ""}`}
                  />
                )}
              </button>
              {location.pathname !== "/signin" && location.pathname !== "/signup" && (
                <li>
                  <Link
                    to="/signin"
                    className={`btn-sm text-gray-200 bg-custom-100 hover:bg-gray-200 ml-3`}
                  >
                    <span>Sign In</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-200 flex-shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
