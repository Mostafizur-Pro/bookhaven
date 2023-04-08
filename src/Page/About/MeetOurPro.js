import React from "react";
import img1 from "../../asset/MeetOurPro/img-01.jpg";
import img2 from "../../asset/MeetOurPro/img-02.jpg";
import img3 from "../../asset/MeetOurPro/img-03.jpg";
import img4 from "../../asset/MeetOurPro/img-04.jpg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const MeetOurPro = () => {
  return (
    <div>
      <div>
        <div className="mt-10">
          <p>Team Behind Book Library</p>
          <h2 className="text-2xl font-semibold mb-2">
            Meet Our Professionals
          </h2>
        </div>
        <hr />

        <section className="flex  justify-between">
          <div className="card relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <figure className="px-10 pt-10 ">
              <img
                src={img1}
                alt="Shoes"
                className="rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Jude Morphew</h2>
              <p>Online Retail Manager</p>
              <div className="flex gap-4">
                {" "}
                <FaFacebook /> <FaLinkedin /> <FaTwitter />{" "}
              </div>
            </div>
          </div>
          <div className="card relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <figure className="px-10 pt-10">
              <img
                src={img2}
                alt="Shoes"
                className="rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Book Burger</h2>
              <p>Bookstore Director</p>
              <div className="flex gap-4">
                {" "}
                <FaFacebook /> <FaLinkedin /> <FaTwitter />{" "}
              </div>
            </div>
          </div>
          <div className="card relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <figure className="px-10 pt-10">
              <img
                src={img3}
                alt="Shoes"
                className="rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Book Ship & Co.</h2>
              <p>Business Operations</p>
              <div className="flex gap-4">
                {" "}
                <FaFacebook /> <FaLinkedin /> <FaTwitter />{" "}
              </div>
            </div>
          </div>
          <div className="card relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <figure className="px-10 pt-10">
              <img
                src={img4}
                alt="Shoes"
                className="rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Enoch Gallion</h2>
              <p>Assistant Director</p>
              <div className="flex gap-4">
                {" "}
                <FaFacebook /> <FaLinkedin /> <FaTwitter />{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeetOurPro;
