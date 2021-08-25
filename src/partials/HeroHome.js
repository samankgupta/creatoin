import React from 'react';

function HeroHome() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle className="animate-pulse" cx="1232" cy="300" r="128" />
            <circle className="animate-pulse" cx="155" cy="100" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 pt-20" data-aos="zoom-y-out">Introducing <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">CREATOIN</span></h1><br />
            <h1 className="text-3xl md:text-3xl font-medium leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">A Coin for Creators</h1><br />
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Back/bet on creators with digital assets, mutually beneficial incentive models, and creative solutions to support a world where creators and users can equally win from amazing content generation.</p><br />
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-500 hover:to-green-400 w-full mb-4 sm:w-auto sm:mb-0" href="#about">Learn More</a>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}

export default HeroHome;