import React from "react";
import ContactFormModal from "./ContactFormModal";

const GetInTouch = ({ heading, message, email, contactForm }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} { contactForm.show ? 
          (<ContactFormModal contactForm={contactForm} text={email} isButton={false}/>) : 
          (<a href={`mailto:${email}`}>{email}</a> 
        )}.
      </p>
    </>
  );
};

export default GetInTouch;
