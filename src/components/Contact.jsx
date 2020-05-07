 import React from "react";
 import SocialLinks from "./SocialLinks";
 import {AboutAuthor} from "../constants"
/***********************
  Contact Component
  ***********************/

function Contact(props) {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">
                web
                <i className="fas fa-at at" />
                {AboutAuthor.email}
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action={"https://formspree.io/"+AboutAuthor.email} >
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;