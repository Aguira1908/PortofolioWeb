import React from 'react';
import AvatarImg from '/public/img/person/passfoto.webp';
import SignImg from '/public/img/person/sign.png';
import ScrollRevealTexxt from '../Provider/ScrollRevealText';
import ScrollRevealText from '../Provider/ScrollRevealText';
const About = () => {
  return (
    <section id="about" className="mil-p-0-90 pb-[90px]">
      <div
        className="mil-oval-frame-2 mil-mb-90  mb-[90px]!
        mx-auto pb-6 flex justify-center bg-[rgba(32,33,36,0.1)] w-[170px] h-[170px] rounded-br-[200px] rounded-bl-[200px] 
      "
      >
        <img
          src={AvatarImg}
          className="mt-auto w-[120px] h-[120px] rounded-[50%] object-cover"
          alt="avatar"
          loading="lazy"
        />
      </div>
      <div
        className="row justify-content-center
        w-full flex items-center justify-center
      "
      >
        <div className="col-lg-8   flex justify-center items-center w-full">
          <div className="mil-center w-[66%] text-center flex flex-col items-center">
            {/* <h2 className="mil-up mil-mb-30 mb-[30px]! font-semibold text-4xl">
              Hi! My name is Zikkri, <br />
              i’m Website Developer based in Medan, North Sumatera
            </h2> */}
            <ScrollRevealText classProp="mil-up mil-mb-30 mb-[30px]! font-semibold text-4xl">
              Hi! My name is Zikkri, <br />
              i’m Website Developer based in Medan, North Sumatera
            </ScrollRevealText>
            <div className="mil-quote mil-up mil-mb-30 mb-[30px]!">
              <i className="fas fa-quote-left"></i>
            </div>
            {/* <p className="mil-up mil-mb-30 mb-[30px]!"></p> */}
            <ScrollRevealText classProp="mil-up mil-mb-30 mb-[30px]!">
              I am a detail-oriented web developer with strong skills in
              Laravel, React, and modern full-stack development. I build clean,
              scalable systems from news portals and API integrations to
              automated summarization features. I’m committed to delivering
              reliable, user-focused solutions and continually improving through
              new technologies. Let’s work together to bring impactful web
              applications to life!
            </ScrollRevealText>
            {/* <img
              src={SignImg}
              alt="signature"
              className="mil-up mil-sign w-[140px]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
