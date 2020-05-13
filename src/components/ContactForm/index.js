import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import "./styles.css";

class ContactForm extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, subject, message } = this.state;
    let templateParams = {
      email,
      subject: subject,
      message,
    };
    emailjs.send(
      "gmail",
      "contact_form",
      templateParams,
      "user_7L9gh5Svz96faEIUotcRg"
    );
    this.resetForm();
  };

  resetForm() {
    this.setState({
      email: "",
      subject: "",
      message: "",
    });
  }

  onSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    // To only Enable the submit button when all fields has data
    // in order to avoid sending emails when clicking while the form is empty
    const { email, subject, message } = this.state;
    const enableSubmit =
      email.length > 0 && subject.length > 0 && message.length > 0;

    return (
      <form
        className="contact-form"
        id="contact-form"
        onSubmit={this.handleSubmit}
        method="POST"
      >
        <h3 className="form-title">Or Send me an Email!</h3>
        <div className="form-group">
          <label className="field-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={this.state.email}
            onChange={this.onEmailChange}
            placeholder="Enter your Email here.."
          />
        </div>
        <div className="form-group">
          <label className="field-label" htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={this.state.subject}
            onChange={this.onSubjectChange}
            placeholder="You want to talk about?"
          />
        </div>

        <div className="form-group">
          <label className="field-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-control"
            rows="5"
            id="message"
            value={this.state.message}
            onChange={this.onMessageChange}
            placeholder="Your message goes here..."
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={!enableSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default ContactForm;
