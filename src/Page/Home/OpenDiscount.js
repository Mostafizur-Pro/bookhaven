import React from 'react';
import contactImage from "../../asset/contactpage/contactpage.jpg";

const OpenDiscount = () => {
    return (
        <div
      className="hero h-48 mb-10"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="flex ">
        <div>
          <h1 className="text-3xl font-bold">Open Discount For All</h1>
          <p>
            Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Ut
            Labore Et Dolore.
          </p>
        </div>
        <div className="">
          <button className="btn ml-20 btn-primary">Read More</button>
        </div>
      </div>
    </div>
    );
};

export default OpenDiscount;