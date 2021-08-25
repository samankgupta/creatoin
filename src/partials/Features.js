import React from 'react';

function Features() {


  return (
    <section className="relative" id="about">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What is  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Creatoin</span> ?</h1><br />
            <p className="text-xl text-gray-600"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-medium">Creatoin</span> is a platform where every creator has a coin. You can support your favorite creators by buying/selling their coins. <br />Every user can back/bet on creators with their digital assets, mutually beneficial incentive models, and creative solutions.<br /> Lets create a world where creators and thier followers can equally win from amazing content <span className="font-medium">creation</span>.</p><br />
          </div>
          {/* Section content */}

        </div >
      </div >
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div><br /><br /><br /><br />
    </section >
  );
}

export default Features;
