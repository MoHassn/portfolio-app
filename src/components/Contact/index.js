import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-header">Sure, happy to contact me!</h2>
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
    </section>
  );
};

export default Contact;
