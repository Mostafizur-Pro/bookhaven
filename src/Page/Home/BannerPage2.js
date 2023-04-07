import React, { useEffect, useState } from 'react';
import image1 from '../../asset/homepage/Icon/bgparallax-01.jpg'
import image2 from '../../asset/homepage/Icon/bgparallax-02.jpg'
import image3 from '../../asset/homepage/Icon/bgparallax-03.jpg'

const BannerPage2 = () => {
   

    return (
        <div className='grid  grid-cols-3 gap-5 mt-5'>

    <section className="hero h-full w-full" style={{ 
            backgroundImage: `url(${image1})`, }}>
  <div className="hero-overlay bg-opacity-70"></div>


  <div className="hero-content text-right text-neutral-content">
    <div className="max-w-md">
      <h1 className=" text-2xl font-bold p-10">Books we have
      <br/>
      1,430</h1>
      
      
    </div>
  </div>

</section>
<section className="hero h-full w-full" style={{ 
            backgroundImage: `url(${image2})`, }}>
  <div className="hero-overlay bg-opacity-70"></div>


  <div className="hero-content text-right text-neutral-content">
    <div className="max-w-md">
      <h1 className=" text-2xl font-bold p-10">Total Members
      <br/>
      610</h1>
      
      
    </div>
  </div>

</section>
<section className="hero h-full w-full"style={{ 
            backgroundImage: `url(${image3})`, }}>
  <div className="hero-overlay bg-opacity-70"></div>


  <div className="hero-content text-right text-neutral-content">
    <div className="max-w-md">
      <h1 className=" text-2xl font-bold p-10">Happy Users<br/>
      559</h1>
      
      
    </div>

  </div>
</section>
     
        </div>
    );
};

export default BannerPage2;