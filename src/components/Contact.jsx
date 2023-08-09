import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

const Contact = ({ contactClose }) => {
  const form = useRef();

  const onCloseContact = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      contactClose();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3gxorfc",
        "template_4x3a5nl",
        form.current,
        "eDEy3iVsM37omOtMY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className="contact-container" onClick={onCloseContact}>
        <form
          className="form-container flex-box"
          ref={form}
          onSubmit={sendEmail}
          action=""
        >
          <div className="contact-title-container flex-box">
            <button className="close-button" onClick={contactClose}>
              x
            </button>
            <p className="contact-title flex-box">Contact Us</p>
          </div>

          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
            name="user-name"
            required
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email id"
            name="user-name"
            required
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Title"
            name="Title"
            required
          />

          <textarea
            className="contact-input"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="submit-buttom">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
