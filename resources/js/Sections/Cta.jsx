import React from 'react';
import '../../css/Button.css';

const Cta = () => {
  return (
    <div className="mil-p-0-90  pb-[90px] pt-[30px]">
      <div className="row justify-content-center  flex justify-center ">
        <div className="col-lg-8 flex w-[60%]">
          <div className="mil-center text-center">
            <h2 className="mil-up mil-mb-30  mb-[30px] text-4xl font-semibold">
              Ready to bring your ideas to life? I'm here to help
            </h2>
            <div className="mil-up">
              <a href="/progres" className="mil-btn mil-sm-btn">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
