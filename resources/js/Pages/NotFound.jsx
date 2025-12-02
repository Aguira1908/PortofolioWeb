import React from 'react';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center  gap-8">
      <h1 className="text-4xl font-bold">Still Working... Don't Wory</h1>
      <img className="w-xs" src="/img/404.jpg" alt="" />
      <a href="/" className="hover:underline ">
        Back To Home
      </a>
    </div>
  );
};

export default NotFound;
