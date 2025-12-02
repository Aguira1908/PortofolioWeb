import React, { useEffect } from 'react';
import '../../css/preloader.css';
import gsap from 'gsap';

const Preloader = () => {
  useEffect(() => {
    // Timeline animasi sama seperti template
    const tl = gsap.timeline();

    // masuk (fade in + naik)
    tl.to('.mil-preloader-content', {
      ease: 'sine',
      y: 0,
      duration: 0.4,
      scale: 1,
      opacity: 1,
      delay: 0.2,
    });

    // keluar (fade out + turun)
    tl.to('.mil-preloader-content', {
      ease: 'sine',
      y: -200,
      duration: 0.4,
      scale: 0.6,
      opacity: 0,
      delay: 1.2,
    });

    // frame preloader menyusut ke atas
    tl.to('.mil-preloader-frame', {
      ease: 'sine',
      duration: 0.4,
      height: 0,
    });
  }, []);
  return (
    <div className="mil-preloader-frame">
      <div
        className="mil-preloader-content"
        style={{ transform: 'scale(0.6) translateY(200px)', opacity: 0 }}
      >
        <div className="mil-preloader">
          <div className="mil-circ-1"></div>
          <div className="mil-circ-2"></div>
          <div className="mil-circ-3"></div>
          <div className="mil-circ-4"></div>
        </div>
        <div className="mil-upper">Loading</div>
      </div>
    </div>
  );
};

export default Preloader;
