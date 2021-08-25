import React from 'react';
import creators from '../utils/Creators';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-14">
          <h1 className="h2 mb-8 text-white text-center">Popular Creators</h1><br />

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {creators.map(creator =>
              <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white" data-aos="fade-up">
                <div className="relative w-80 h-80 overflow-hidden">
                  <img src={creator.image} alt={creator.name} />
                  <div className="text-center absolute w-full" style={{ bottom: "-30px" }}>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="tracking-wide uppercase text-lg font-bold">{creator.name}</p>
                  <p className="text-gray-400 text-sm">@{creator.youtube.split('/').slice(-1)[0]}</p>
                </div>
                <div className="pb-6 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
                  <div className="posts">
                    <p className="text-lg">$324</p>
                    <p className="text-gray-400 text-sm">Coin Price</p>
                  </div>
                  <a className="btn bg-blue-500 text-white" href="/">Buy</a>
                  <div className="following">
                    <p className="text-lg">295</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out">
            <div>
              <a className="btn text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-500 hover:to-green-400 w-full my-8 sm:w-auto sm:mb-0" href="/">Find More Creators</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
