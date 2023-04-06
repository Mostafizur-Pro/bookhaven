import React from "react";
import bannerImage from "../../asset/homepage/bannerpage.jpg";

const BannerPage = () => {
  return (
    <div
      className="hero min-h-5/6"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-right text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Welcome to Open Library</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Product List</button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
