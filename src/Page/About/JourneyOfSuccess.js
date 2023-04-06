import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaHome,
  FaLinkedin,
  FaMobileAlt,
  FaRegClock,
} from "react-icons/fa";
import img1 from "../../asset/about/img-01.jpg";

const JourneyOfSuccess = () => {
  return (
    <div>
      <div className="mt-10">
        <p>Our Pride Moments</p>
        <h2 className="text-2xl font-semibold mb-2">Journey of Success</h2>
      </div>
      <hr />
      <section className="mt-5">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="">
                <div className="m-10">
                  <p>March 27, 2023</p>
                  <h1 className="text-2xl my-5 font-medium">
                    First Step Toward Success
                  </h1>
                  <hr />
                  <div className="">
                    <div>
                      <p className="flex items-center mb-3">
                        <FaHome className="mr-3" /> Dhaka, bangladesh
                      </p>
                      <p className="flex items-center mb-3">
                        <FaMobileAlt className="mr-3" /> +880 123456789
                      </p>
                      <p className="flex items-center mb-3">
                        <FaRegClock className="mr-3" /> Serving 7 Days A Week
                        From 9am - 5pm
                      </p>
                      <p className="flex items-center mb-3">
                        <FaEnvelope className="mr-3" /> support@domain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyOfSuccess;
