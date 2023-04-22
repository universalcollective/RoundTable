// import React, { useState, useRef } from 'react';
// import Modal from '../utils/Modal';
// import HeroImage from '../images/hero-image.png';
// import video from '/videos/video.mp4';

// function HeroFeatures() {
  // const [videoModalOpen] = useState(false);
  // const video = useRef(null);
  // const heroSection = useRef(null);
  // const [setShowHero] = useState(false);

  // useEffect(() => {
  //   videoModalOpen ? video.current.play() : video.current.pause();
  // }, [videoModalOpen]);

//   return (
//     <section>
//       <div>
//         <div
//           className="relative flex justify-center mb-8"
//           data-aos="zoom-y-out"
//           data-aos-delay="450"
//         >
//           <div className="flex flex-col justify-center">
//             <img
//               className="mx-auto"
//               src={HeroImage}
//               width="768"
//               height="432"
//               alt="Hero"
//             />
//           </div>
//           <button
//             className="absolute top-full flex items-center transform -translate-y-1/2 bg-gray-200 rounded-full font-medium group p-4 shadow-lg"
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               setVideoModalOpen(true);
//             }}
//             aria-controls="modal"
//           >
//             <svg
//               className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
//               <path d="M10 17l6-5-6-5z" />
//             </svg>
//             <span className="ml-3">Watch the full video (2 min)</span>
//           </button>
//         </div>

//         {/* Modal */}
//         <Modal
//           id="modal"
//           ariaLabel="modal-headline"
//           show={videoModalOpen}
//           handleClose={() => setVideoModalOpen(false)}
//         >
//           <div className="relative pb-9/16">
//             <video
//               ref={videoRef}
//               className="absolute w-full h-full"
//               width="1920"
//               height="1080"
//               loop
//               autoPlay
//               controls
//             >
//               <source src={video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </Modal>
//       </div>
//     </section>
//   );
// }

// export default HeroFeatures;
