import React, { useEffect } from 'react';

import '../../css/RighBanner.css';
import '../../css/scrollbar.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RightBar = () => {
  useEffect(() => {
    gsap.to('.mil-progress', {
      height: '100%',
      ease: 'linear',
      scrollTrigger: {
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="mil-right-banner" id="scene">
      {/* scrollbar */}
      <div className="mil-progress-track">
        <div className="mil-progress"></div>
      </div>
      {/* scrollbar end */}
      <div className="mil-banner-wrapper" data-depth="1">
        <div id="swupBg" className="mil-banner-fram ">
          {/* <img
            src="img/person/bg-1.jpg"
            alt="background"
            className="mil-banner-bg mil-blur"
          /> */}
        </div>
      </div>
      <div className="mil-banner-wrapper" data-depth="0.2">
        <div id="swupPerson" className="mil-banner-frame w-full ">
          <img
            src="img/person/passfoto.webp"
            alt="person"
            className="mil-banner-person scale-105 blur-xs object-cover translate-x-4.5"
          />
        </div>
      </div>
      <div className="mil-flying-skills" data-depth="0.1">
        <div id="swupSkills" className="mil-skills-frame">
          <div className="mil-item" style={{ top: '30%', left: '10%' }}>
            <img src="img/logos/1.jpg" alt="logo" />
          </div>
          <div className="mil-item" style={{ bottom: '15%', left: '20%' }}>
            <img src="img/logos/2.jpg" alt="logo" />
          </div>
          <div className="mil-item" style={{ bottom: '45%', right: '15%' }}>
            <img src="img/logos/3.jpg" alt="logo" />
          </div>
          <div className="mil-el mil-addition-el-1">+</div>
          <div className="mil-el mil-addition-el-2">+</div>
          <div className="mil-el mil-addition-el-3"></div>
          <div className="mil-el mil-addition-el-4"></div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
