import React, { useEffect, useState } from 'react';
import image1 from '../../asset/homepage/Icon/bgparallax-01.jpg'
import image2 from '../../asset/homepage/Icon/bgparallax-02.jpg'
import image3 from '../../asset/homepage/Icon/bgparallax-03.jpg'

const BannerPage2 = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(
          "BannerPage2.json"
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setItems(data);
          });
      }, []);

    return (
        <div className='grid grid-cols-3 gap-5 mt-5'>
{items.map(item=><>
    <section className="hero h-48  " style={{ 
            backgroundImage: `url(${image2})`, }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className='border-2 border-white  '>

  <div className="hero-content text-right text-neutral-content">
    <div className="max-w-md">
      <h1 className=" text-2xl font-bold p-10">{item?.text}
      <br/>
      {item?.Qty}</h1>
      
      
    </div>
  </div>
  </div>
</section>

</>)}
             
            
           
        </div>
    );
};

export default BannerPage2;