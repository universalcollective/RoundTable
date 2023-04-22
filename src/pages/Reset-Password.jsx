import React from 'react';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import { useNightMode } from '../utils/NightModeContext';

function ResetPassword() {
  const { isNightMode } = useNightMode();

  return (
    <div className={`flex flex-col min-h-screen overflow-hidden ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className={`max-w-3xl mx-auto text-center pb-12 md:pb-20 ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
                <h1 className={`h1 mb-4 ${isNightMode ? 'bg-slate-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>Let’s get things sorted out</h1>
                <p className="text-xl ">Enter the email address you used when you signed up for your account, and we’ll email you a link to reset your password.</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block  text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3 text-white justify-center">
                      <button className="btn  text-white bg-custom-100 hover:bg-gray-400 hover:text-custom-100 ho mb-4 b-0 w-full">Send reset link</button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default ResetPassword;