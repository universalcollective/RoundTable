// import React, { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.min.css";
// import "../css/style.css";

// function Marqee() {
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("#scroll-direction"),
//       smooth: true,
//       repeat: true,
//       direction: "horizontal",
//     });
//   }, []);

//   return (
//     <section className="c-section" data-scroll-section>
//       <div className="o-container">
//         <div className="c-direction-block_wrapper">
//           <div
//             className="c-section_infos -padding"
//             data-scroll
//             data-scroll-sticky
//             data-scroll-target="#scroll-direction"
//           >
//             <div className="c-section_infos_inner" data-scroll>
//               <h3>
//                 02. <br />
//                 Scroll direction
//               </h3>
//               <div className="c-sections_infos_text u-text">
//                 <p>And if that wasn't enough, make 'em go backwards. Or upwards. Or downwards!</p>
//               </div>
//             </div>
//           </div>
//           <div className="c-direction-block" id="direction">
//             <div className="c-direction-block_item -one">
//               <span
//                 className="c-direction-block_item_inner"
//                 data-scroll
//                 data-scroll-direction="horizontal"
//                 data-scroll-speed="6"
//                 data-scroll-target="#direction"
//               >
//                 I'm moving in this direction
//               </span>
//             </div>
//             <div className="c-direction-block_item -two">
//               <span
//                 className="c-direction-block_item_inner"
//                 data-scroll
//                 data-scroll-direction="horizontal"
//                 data-scroll-speed="-8"
//                 data-scroll-target="#direction"
//               >
//                 And in this direction
//               </span>
//             </div>
//             <div className="c-direction-block_item -three">
//               <span
//                 className="c-direction-block_item_inner"
//                 data-scroll
//                 data-scroll-direction="horizontal"
//                 data-scroll-speed="9"
//                 data-scroll-target="#direction"
//                 data-scroll-delay="0.05"
//               >
//                 Sooo customizable. Right?
//               </span>
//             </div>
//             <div className="c-direction-block_item -four">
//               <span
//                 className="c-direction-block_item_inner"
//                 data-scroll
//                 data-scroll-direction="horizontal"
//                 data-scroll-speed="15"
//                 data-scroll-target="#direction"
//               >
//                 I can also go in this direction
//               </span>
//             </div>
//             <div className="c-direction-block_item -five">
//               <span
//                 className="c-direction-block_item_inner"
//                 data-scroll
//                 data-scroll-direction="horizontal"
//                 data-scroll-speed="-20"
//                 data-scroll-target="#direction"
//                 data-scroll-delay="0.05"
//               >
//                 Ok
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Marqee;
