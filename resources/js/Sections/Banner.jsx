import React, { useEffect } from 'react';
import '../../css/Banner.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  // Programmnya disini

  useEffect(() => {
    // --- animation for .mil-up (fade + slide up)
    const upElements = document.querySelectorAll('.mil-up');

    upElements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: el,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // --- animation for .mil-rotate (rotate on scroll)
    const rotateElements = document.querySelectorAll('.mil-rotate');

    rotateElements.forEach((el) => {
      const value = Number(el.dataset.value || 0);

      gsap.fromTo(
        el,
        { rotate: 0 },
        {
          rotate: value,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: el,
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup agar tidak leak saat komponen di-unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="
      mil-side-banner mil-center

      text-center
    "
    >
      <div className="mil-banner-top mil-up"></div>
      <div className="mil-banner-title">
        <div
          className="mil-upper mil-dark mil-up mil-mb-30
        
          uppercase text-[12px] font-semibold tracking-[2px] mb-[30px]!
        "
        >
          Hello! My name is
        </div>
        <h1
          className="mil-up mil-mb-30
          mb-[30px]! text-7xl font-extrabold
        "
        >
          Zikri Amri
          <br />
          Saragih
        </h1>
        <p className="mil-upper mil-dark mil-up">Web Developer</p>
      </div>
      <div
        className="mil-up mil-oval-frame
          pt-[25px]
          flex
          justify-center
          bg-[rgba(32,33,36,0.1)]
          w-[170px]
          h-[230px]
          rounded-tl-[200px]
          rounded-tr-[200px]
          max-h-[750px]:hidden
        "
      >
        <div
          className="mil-circle-text
          flex justify-center items-center w-[130px] h-[130px]
        "
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
            className="mil-ct-svg mil-rotate
              w-[140px] h-[140px] scale-[2]
             "
            data-value="360"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text
                className="fill-[rgb(32,33,36)]
                  uppercase
                  text-[12px]
                  font-medium
                  transition-all
                  duration-400
                  ease-[cubic-bezier(0,0,0.3642,1)]"
                style={{ letterSpacing: '6.5px' }}
              >
                {/* circle text */}
                <textPath xlinkHref="#circlePath">
                  Scroll down - Scroll down -
                </textPath>
              </text>
            </g>
          </svg>
          <a
            href="#about"
            className="mil-button absolute border-12 bg-zinc-900 text-white flex justify-center items-center h-[80px] w-[80px] rounded-full border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-down"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
