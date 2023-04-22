import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import '../css/style.css';
import VideoBackground from "../images/WARZONE LUTS.mp4";

function Features() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    }
  }, []);

  return (
    <div className="data-scroll-container" ref={containerRef}>
      <section className="features-container">
        <div className="features-background" data-scroll data-scroll-sticky data-scroll-target="#features-section">
          <div className="video-background-wrapper" data-scroll-speed="-1">
            <video
              className="video-background"
              src={VideoBackground}
              autoPlay
              loop
              muted
              ref={videoRef}
            />
          </div>
        </div>
        <div id="features-section" className="features-content">
          <h2> </h2>
        </div>
      </section>
    </div>
  );
}

export default Features;
