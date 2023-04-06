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

const KnowMore = () => {
  return (
    <div>
      <section>
        <div className=" my-20 ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="">
              <div className="m-10">
                <div className="">
                  <div>
                    <div className="mt-10">
                      <p>Geetings & Welcome</p>
                      <h2 className="text-2xl font-semibold mb-2">
                        Know More About Us
                      </h2>
                    </div>
                    <hr />
                    <p className="flex items-center mb-3">
                      Consectetur adipisicing elit sed do eiusmod tempor
                      incididunt labore toloregna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamcoiars nisiuip
                      commodo consequat aute irure dolor in aprehenderit aveli
                      esseati cillum dolor fugiat nulla pariatur cepteur sint
                      occaecat cupidatat.
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <button className="btn btn-primary">Our History</button>
                    <button className="btn btn-outline btn-primary">
                      Meet Our Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/s_7sph_c6Jk"
                title='Nonprofit "About Us" Profile'
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowMore;
