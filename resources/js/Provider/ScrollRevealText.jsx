import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const ScrollRevealText = ({ children, classProp }) => {
  const el = useRef(null);

  useEffect(() => {
    const split = new SplitText(el.current, { type: 'words' });

    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el.current,
        start: 'top 95%',
        end: 'top 30%',
        scrub: true,
      },
    });

    return () => split.revert();
  }, []);

  return (
    <p className={classProp} ref={el}>
      {children}
    </p>
  );
};

export default ScrollRevealText;
