import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';
import Header from '../Components/Header';

import LeftBar from '../Components/LeftBar';

import '../../css/frame.css';
import '../../css/pageTransition.css';
import '../../css/plugins/font-awesome.min.css';
import '../../css/plugins/swiper.min.css';
import '../../css/frame.css';

import Banner from '../Sections/Banner';
import About from '../Sections/About';
import SectionTitle from '../Sections/SectionTitle';
import Service from '../Sections/Service';
import Language from '../Sections/Language';
import LatestProject from '../Sections/LatestProject';
import HardSkil from '../Sections/HardSkil';
import Cta from '../Sections/Cta';
import Footer from '../Components/Footer';
import RightBar from '../Components/RightBar';
import SmoothScrollProvider from '../Provider/SmoothScrollProvider';

const Home = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = document.querySelector(href);
      const offset = 90;

      if (target) {
        e.preventDefault();
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen relative overflow-hidden h-auto">
        <Preloader />

        <div className="mil-frame fixed z-999 w-full pointer-events-none ">
          <Header />
          {/* <LeftBar /> */}
          {/* BacktoTop Nanti  */}
        </div>

        <div className="mil-content pt-[90px] ml-[90px] w-[calc(100%-90px)] flex justify-between ">
          <div
            className="
        relative w-full

        mil-scroll-wrapper transition-fade "
          >
            <div className="mil-container overflow-hidden px-[90px] w-[calc(63% + 1px)]">
              {/* Banner */}
              <Banner />

              {/* About */}
              <About />

              <SectionTitle>What I Do</SectionTitle>

              {/* Service*/}
              <Service />

              <SectionTitle>Programming Language</SectionTitle>

              {/* Programming Language */}
              <Language />

              <SectionTitle>Hard Skills</SectionTitle>

              {/* Hard Skills */}

              <HardSkil />

              <SectionTitle>Latest Project</SectionTitle>

              {/* Latest Project */}
              <LatestProject />

              <SectionTitle></SectionTitle>

              {/* Cta */}
              <Cta />

              {/* Footer */}
              <Footer />
            </div>
          </div>

          {/* Right Bar */}
          <RightBar />
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default Home;
