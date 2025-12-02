import React from 'react';

import '../../css/iconbox.css';
import '../../css/link.css';
const Service = () => {
  return (
    <section className="mil-p-90-30 pt-[90px] pb-[30px]">
      <div
        className="row justify-content-between align-items-center
        flex   mt-[15px] mr-[15px]  justify-between items-center
      "
      >
        <div className="col-lg-4 flex flex-col md:flex-row ">
          {/*  */}
          <div
            className="mil-icon-box mil-center mil-mb-60 
            text-center mb-[60px]! text-md px-2
          "
          >
            <div className="mil-service-icon mil-up ">
              <img src="img/icons/1.svg" alt="icon" className="mil-mb-30" />
            </div>
            <h5 className="mil-up mil-mb-30 mb-[30px]! text-lg font-bold">
              Full-Stack Web Development
            </h5>
            <p className="mil-up mil-mb-30 mb-[30px]!">
              Building modern web applications using Laravel, React, Inertia.js,
              and Filament with a clean, secure, and scalable architecture.{' '}
            </p>
            <div className="mil-up">
              <a href="/progres" className="mil-link mil-icon-link">
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
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/*  */}
          <div
            className="mil-icon-box mil-center mil-mb-60 
            text-center mb-[60px]! text-md px-2
          "
          >
            <div className="mil-service-icon mil-up ">
              <img src="img/icons/1.svg" alt="icon" className="mil-mb-30" />
            </div>
            <h5 className="mil-up mil-mb-30 mb-[30px]! text-lg font-bold">
              API Integration & Automation
            </h5>
            <p className="mil-up mil-mb-30 mb-[30px]!">
              Integrating external APIs such as WordPress and Spotify, and
              creating automated processes including scheduled news
              summarization.
            </p>
            <div className="mil-up">
              <a href="/progres" className="mil-link mil-icon-link">
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
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/*  */}
          <div
            className="mil-icon-box mil-center mil-mb-60 
            text-center mb-[60px]! text-md px-2
          "
          >
            <div className="mil-service-icon mil-up ">
              <img src="img/icons/1.svg" alt="icon" className="mil-mb-30" />
            </div>
            <h5 className="mil-up mil-mb-30 mb-[30px]! text-lg font-bold">
              Server Deployment & VPS Management
            </h5>
            <p className="mil-up mil-mb-30 mb-[30px]!">
              Deploying applications on VPS servers, configuring environments,
              optimizing performance, and maintaining production readiness.
            </p>
            <div className="mil-up">
              <a href="/progres" className="mil-link mil-icon-link">
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
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
