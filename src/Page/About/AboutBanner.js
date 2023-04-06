import React from "react";
import contactImage from "../../asset/contactpage/contactpage.jpg";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const AboutBanner = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us </h1>

            <div className="flex gap-2 items-center text-white border-orange-400">
              <Link to="/">Home </Link>

              <FaAngleRight />
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
