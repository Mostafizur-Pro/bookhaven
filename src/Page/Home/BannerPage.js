import React from "react";
import bannerImage from "../../asset/homepage/bannerpage.jpg";
import { Zoom } from "react-reveal";

const BannerPage = () => {
  return (
    <div
      className="hero h-96 mb-20"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-right text-neutral-content">
        <div className="max-w-md">
          <Zoom>
            <h1 className="mb-5 text-4xl font-bold">LOTS OF EBOOKS</h1>
            <p className="mb-5">
              Welcome to your frinedly neighborhood library. We have more than
              15,000 free ebooks waiting to be discovered.
            </p>

            <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-red-600 group">
              <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Product List
              </span>
            </button>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
