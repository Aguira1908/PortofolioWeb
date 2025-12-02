import React, { useEffect } from 'react';

import '../../css/skills.css';
import gsap from 'gsap';

const HardSkil = () => {
  useEffect(() => {
    const width = document.querySelectorAll('.mil-bar');

    width.forEach((section) => {
      var value = section.getAttribute('data-value');

      gsap.fromTo(
        section,
        {
          width: 0,
          duration: 7000,
          ease: 'sine',
        },
        {
          width: value,
          scrollTrigger: {
            trigger: section,
            toggleClass: 'mil-active',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="mil-p-90-60 pt-[90px] pb-[60px] ">
      <div
        className="row justify-content-between align-items-center
       grid grid-cols-2 gap-8
       font-semibold
      "
      >
        <div className="col-lg-6">
          <div className="mil-lang-skills-item mil-mb-30 ">
            <h6 className="mil-up mil-mb-30 mb-[30px]!">ReactJS</h6>
            <div className="mil-line-progress mil-up">
              <div className="mil-bar " data-value="95%"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mil-lang-skills-item mil-mb-30">
            <h6 className="mil-up mil-mb-30 mb-[30px]! ">Laravel</h6>
            <div className="mil-line-progress mil-up">
              <div className="mil-bar" data-value="90%"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mil-lang-skills-item mil-mb-30">
            <h6 className="mil-up mil-mb-30 mb-[30px]!">TailwindCSS</h6>
            <div className="mil-line-progress mil-up">
              <div className="mil-bar" data-value="90%"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mil-lang-skills-item mil-mb-30">
            <h6 className="mil-up mil-mb-30 mb-[30px]!">Linux (Ubuntu)</h6>
            <div className="mil-line-progress mil-up">
              <div className="mil-bar " data-value="70%"></div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6">
          <div className="mil-lang-skills-item mil-mb-30">
            <h6 className="mil-up mil-mb-30 mb-[30px]!">Docker</h6>
            <div className="mil-line-progress mil-up">
              <div className="mil-bar" data-value="60%"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mil-lang-skills-item mil-mb-30">
            <h6 className="mil-up mil-mb-30 mb-[30px]!">Linux</h6>
            <div className="mil-line-progress mil-up">
              <div className="mil-bar" data-value="40%"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HardSkil;
