import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './css/style.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/Reset-Password';
import NotFound from './pages/CatchAll'; // import the 404 page component
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/Privacy-Policy';
import MusicPlayer from './utils/MusicPlayer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} /> // add the catch-all route
      </Routes>
      <MusicPlayer />
    </>
  );
}

export default App;
