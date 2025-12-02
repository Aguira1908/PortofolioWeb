import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const button = document.querySelector('.mil-menu-btn');
    const navigation = document.querySelector('.mil-navigation');

    if (!button || !navigation) return;

    const handler = () => {
      button.classList.toggle('mil-active');
      navigation.classList.toggle('mil-active');
    };

    button.addEventListener('click', handler);

    return () => button.removeEventListener('click', handler);
  }, []);

  return (
    <div className="mil-top-panel">
      {/* <a href="/" className="mil-logo">
        <span className="mil-dot">C</span>
      </a> */}

      <a href="/" className="w-[90px] h-[90px]">
        <span></span>
      </a>

      <div className="mil-navigation">
        <nav id="swupMenu" className="mil-menu-transition">
          <ul>
            <li className="mil-has-children mil-active">
              <a href="/">Home</a>
              {/* <ul>
                <li>
                  home-1.html
                  <a href="/progres">Default</a>
                </li>
                <li>
                  home-2.html
                  <a href="/progres">Full width homepage</a>
                </li>
                <li>
                  portfolio-5.html
                  <a href="/progres">Portfolio slider</a>
                </li>
              </ul> */}
            </li>
            <li className="mil-has-children">
              <a href="/progres">Projects</a>
              {/* <ul>
                <li>
                  <a href="portfolio-1.html">Projects list</a>
                </li>
                <li>
                  <a href="portfolio-2.html">Projects 2 column list</a>
                </li>
                <li>
                  <a href="portfolio-3.html">Full width list</a>
                </li>
                <li>
                  <a href="portfolio-4.html">Full width simple list</a>
                </li>
                <li>
                  <a href="portfolio-5.html">Carousel</a>
                </li>
                <li>
                  <a href="project-1.html">Single Project</a>
                </li>
                <li>
                  <a href="project-2.html">Full width Single Project</a>
                </li>
              </ul> */}
            </li>
            <li className="mil-has-children">
              <a href="#">Blog</a>
              {/* <ul>
                <li>
                  <a href="blog-1.html">Blog list</a>
                </li>
                <li>
                  <a href="blog-2.html">Full width list</a>
                </li>
                <li>
                  <a href="publication-1.html">Publication</a>
                </li>
                <li>
                  <a href="publication-2.html">Full width Publication</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="mil-has-children">
              <a href="#">Other</a>
              {/* <ul>
                <li>
                  <a href="story.html">Story timeline</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="service.html">Single Service</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
              </ul> */}
            </li>
          </ul>
        </nav>
      </div>

      <div className="mil-top-panel-btns">
        <a href="#" className="mil-contact-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>

        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
