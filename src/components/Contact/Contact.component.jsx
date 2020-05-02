import React from "react";
import "./Contact.styles.scss";
import sprite from "../../sprite.svg";

const Contact = () => {
  return (
    <section className="grid-contact p-sm contact-section">
      <h1 className="font-skills-heading">Contact Me</h1>
      <div className="contact-icons">
        <div className="grid-phone">
          <svg className="icon-sm">
            <use href={sprite + "#phone-call"}></use>
          </svg>
          <p className="font-contact">626-627-4342</p>
        </div>
        <div className="grid-email">
          <svg className="icon-sm">
            <use href={sprite + "#envelope"}></use>
          </svg>
          <p className="font-contact">billymiyata@gmail.com</p>
        </div>
      </div>
      <p>Website Created By William Miyata</p>
    </section>
  );
};

export default Contact;
