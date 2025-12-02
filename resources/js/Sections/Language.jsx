import React, { useEffect } from 'react';
import '../../css/skills.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Language = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.mil-circular-progress');

    // Progress bar animation
    sections.forEach((section) => {
      const value = section.getAttribute('data-value');

      gsap.fromTo(
        section,
        { '--p': '0' },
        {
          '--p': value,
          duration: 1,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Number counter animation
    const numbers = document.querySelectorAll('.mil-counter');

    numbers.forEach((element) => {
      const target = parseFloat(element.getAttribute('data-number'));
      const decimals =
        target % 1 !== 0 ? target.toString().split('.')[1].length : 0;

      const obj = { val: 0 }; // starting value

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: element,
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => {
          element.textContent = obj.val.toFixed(decimals);
        },
      });
    });
  }, []);

  return (
    <section
      className="mil-lang-skills mil-p-90-60
      pt-[60px] pb-[60px] 
    "
    >
      <div
        className="row  justify-content-between align-items-center
          grid grid-cols-2 md:grid-cols-4 
      "
      >
        <div
          className=" col-lg-3
          
          flex items-center justify-center text-sm font-semibold text-gray-700
        "
        >
          <div
            className="mil-lang-skills-item mil-center mil-up mil-mb-30
            text-center  mb-[30px]!
          "
          >
            <div className="mil-circular-progress" data-value="95%">
              <div className="mil-counter-frame mil-upper mil-dark">
                <span className="mil-counter" data-number="95">
                  0
                </span>
                <span>%</span>
              </div>
            </div>
            <h6 className="mil-up">C++</h6>
          </div>
        </div>
        {/*  */}
        <div
          className=" col-lg-3
          
          flex flex items-center justify-center text-sm font-semibold text-gray-700
        "
        >
          <div
            className="mil-lang-skills-item mil-center mil-up mil-mb-30
            text-center  mb-[30px]!
          "
          >
            <div className="mil-circular-progress" data-value="95%">
              <div className="mil-counter-frame mil-upper mil-dark">
                <span className="mil-counter" data-number="95">
                  0
                </span>
                <span>%</span>
              </div>
            </div>
            <h6 className="mil-up">Typescript</h6>
          </div>
        </div>
        {/*  */}
        <div
          className=" col-lg-3
           items-center justify-center
          flex text-sm font-semibold text-gray-700
        "
        >
          <div
            className="mil-lang-skills-item mil-center mil-up mil-mb-30
            text-center  mb-[30px]!
          "
          >
            <div className="mil-circular-progress" data-value="95%">
              <div className="mil-counter-frame mil-upper mil-dark">
                <span className="mil-counter" data-number="95">
                  0
                </span>
                <span>%</span>
              </div>
            </div>
            <h6 className="mil-up">Javascript</h6>
          </div>
        </div>
        {/*  */}
        <div
          className="col-lg-3
          flex items-center justify-center text-sm font-semibold text-gray-700
        "
        >
          <div
            className="mil-lang-skills-item mil-center mil-up mil-mb-30
            text-center  mb-[30px]!
          "
          >
            <div className="mil-circular-progress" data-value="95%">
              <div className="mil-counter-frame mil-upper mil-dark">
                <span className="mil-counter" data-number="95">
                  0
                </span>
                <span>%</span>
              </div>
            </div>
            <h6 className="mil-up">PHP</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Language;
