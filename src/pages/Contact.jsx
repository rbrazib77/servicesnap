import React from "react";
import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import ContactForm from './../components/ContactForm/index';
import GoogleMap from "../components/GoogleMap";

const Contact = () => {
  return (
    <>
      <ContactInfo />
      <ContactForm/>
      <GoogleMap/>
    </>
  );
};

export default Contact;
