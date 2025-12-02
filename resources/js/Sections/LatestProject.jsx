import React from 'react';
import '../../css/blog.css';
import '../../css/link.css';

const LatestProject = () => {
  return (
    <section className="mil-p-90-30 pt-[90px] pb-[30px] ">
      <div className="flex flex-wrap justify-between items-center">
        <div className="lg:w-1/2 w-full px-4">
          <a href="#" className="block mb-[60px] group cursor-pointer">
            <div className="relative overflow-hidden pb-[60%] mil-up">
              <img
                src="img/blog/1.jpg"
                className="
              w-full h-full absolute top-0 left-0
              object-cover object-center
              scale-[1.05]
              transition-all duration-[400ms] ease-[cubic-bezier(0,0,0.3642,1)]
              group-hover:brightness-[80%] group-hover:scale-[1]
            "
              />
              <div
                className="
              absolute top-[15px] right-[15px]
              opacity-0 scale-[0.5]
              transition-all duration-[400ms] ease-[cubic-bezier(0,0,0.3642,1)]
              group-hover:opacity-100 group-hover:scale-[1]
            bg-[#4caf50] rounded-full p-1.5
            "
              >
                {/* Icon */}
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
                  className="feather feather-arrow-right  text-white "
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            <div className="flex flex-col h-full mt-8 gap-3 w-full">
              <h4 className=" mil-up overflow-hidden text-ellipsis line-clamp-2 font-semibold">
                News Intelligence Platform for Diskominfo Serdang Bedagai
              </h4>
              <p className="mil-up overflow-hidden text-ellipsis  line-clamp-2 text-gray-700">
                A modern web platform that integrates WordPress APIs, local news
                data, and LLM-powered text summarization to deliver automated
                weekly and monthly insights for Diskominfo Serdang Bedagai.
                Built with Laravel, React, and Filament, this system streamlines
                content management, improves information accessibility, and
                enhances operational efficiency through intelligent automation.
              </p>
            </div>
          </a>
        </div>

        <div className="lg:w-1/2 w-full px-4">
          <a href="#" className="block mb-[60px] group cursor-pointer">
            <div className="relative overflow-hidden pb-[60%] mil-up">
              <img
                src="img/blog/1.jpg"
                className="
              w-full h-full absolute top-0 left-0
              object-cover object-center
              scale-[1.05]
              transition-all duration-[400ms] ease-[cubic-bezier(0,0,0.3642,1)]
              group-hover:brightness-[80%] group-hover:scale-[1]
            "
              />
              <div
                className="
              absolute top-[15px] right-[15px]
              opacity-0 scale-[0.5]
              transition-all duration-[400ms] ease-[cubic-bezier(0,0,0.3642,1)]
              group-hover:opacity-100 group-hover:scale-[1]
            bg-[#4caf50] rounded-full p-1.5
            "
              >
                {/* Icon */}
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
                  className="feather feather-arrow-right  text-white "
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            <div className="flex flex-col h-full mt-8 gap-3 w-full">
              <h4 className=" mil-up overflow-hidden text-ellipsis line-clamp-2 font-semibold">
                Titip Lagu – Spotify-Powered Song Request Service
              </h4>
              <p className="mil-up overflow-hidden text-ellipsis  line-clamp-2 text-gray-700">
                A lightweight music request platform powered by Spotify API,
                allowing users to search songs, submit requests, and preview
                tracks in real time. This system automatically stores song
                metadata—including title, artist, album, and audio
                preview—creating a seamless and interactive experience. Built
                with modern web technologies, it delivers fast search
                performance and an engaging user journey for music lovers.{' '}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
