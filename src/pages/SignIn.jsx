// This is the sign in page. It's a simple form with a link to the reset password page.
// Validation is handled by the HTML5 required attribute.
// How to add Validation? https://react-hook-form.com/get-started#Applyvalidation

// Import Dependencies
// --------------------
import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Banner from "../partials/Banner";
import { useForm } from "react-hook-form";
import { useNightMode } from '../utils/NightModeContext';

// firebase?

function SignIn() {
 const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async data => {
    await login(data.email, data.password);
    reset();
  };
  const { isNightMode } = useNightMode();


  return (
    <div className={`flex flex-col min-h-screen overflow-hidden ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className={`${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-24 pb-12 md:pt-30 md:pb-20">
              {/* Page header */}
              <div className= {`max-w-3xl mx-auto text-center pb-10 md:pb-10 ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
                <h1 className={`h1 ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
                  Log into Round Table
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block  text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full "
                        placeholder="Enter your email address"
                        required="required"
                        pattern="\S+@\S+\.\S+"
                        title="Please enter a valid email address."
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block  text-sm font-medium mb-1"
                          htmlFor="password"

                        >
                          Password
                        </label>
                        <Link
                          to="/reset-password"
                          className="text-sm font-medium text-custom-100 hover:underline"
                        >
                          Having trouble signing in?
                        </Link>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required = "required" 
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className=" ml-2">
                            Keep me signed in
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-gray-100 bg-custom-100 hover:bg-gray-100 hover:text-custom-100  w-full">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className=" italic">or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-blue-500 hover:bg-blue-600 w-full relative flex items-center">
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22.46 6.012c-.79.37-1.63.62-2.51.73.9-.54 1.59-1.4 1.92-2.42-.85.5-1.78.87-2.78 1.07-.8-.85-1.94-1.38-3.2-1.38-2.42 0-4.38 1.96-4.38 4.37 0 .34.04.67.11.99-3.63-.18-6.86-1.92-9.01-4.56-.38.65-.59 1.4-.59 2.21 0 1.52.77 2.87 1.95 3.66-.72-.02-1.39-.22-1.98-.55v.06c0 2.12 1.51 3.88 3.5 4.29-.37.1-.75.15-1.15.15-.28 0-.55-.03-.82-.08.56 1.74 2.17 3.01 4.09 3.04-1.49 1.16-3.37 1.85-5.42 1.85-.35 0-.7-.02-1.04-.06 1.94 1.25 4.24 1.97 6.72 1.97 8.07 0 12.48-6.68 12.48-12.48 0-.19 0-.37-.01-.56.84-.63 1.58-1.39 2.17-2.27z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Continue with Twitter
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className=" text-center mt-6">
                  No account? No worries. {" "}
                  <Link
                    to="/signup"
                    className="text-custom-100 font-bold hover:underline transition duration-150 ease-in-out"
                  >
                    Sign up.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Banner />
    </div>
  );
}

export default SignIn;
