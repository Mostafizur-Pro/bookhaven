import React from "react";
import Contactbanner from "./Contactbanner";
import GetInTouchWithUs from "./GetInTouchWithUs";
import useTitle from "../../hooks/useTitle";

const ContactPage = () => {
  useTitle("Contact");
  return (
    <div>
      <Contactbanner />
      <GetInTouchWithUs />
    </div>
  );
};

export default ContactPage;
