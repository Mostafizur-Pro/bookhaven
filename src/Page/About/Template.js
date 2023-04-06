import React from "react";
import contactImage from "../../asset/contactpage/contactpage.jpg";

const Template = () => {
  return (
    <div
      className="hero h-48 mb-10"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="flex ">
        <div>
          <h1 className="text-3xl font-bold">Full Loaded Template</h1>
          <p>
            Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Ut
            Labore Et Dolore.
          </p>
        </div>
        <div className="">
          <button className="btn ml-20 btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Template;
