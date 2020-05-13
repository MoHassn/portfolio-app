import React from "react";
import "./styles.css";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-header">Contact me via social media!</h2>
      <ul className="contact-list">
        <li>
          <a
            className="contact-link"
            href="https://twitter.com/MuhmdHassn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href="https://github.com/MoHassn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
      <ContactForm />
    </section>
  );
};

export default Contact;
