import React from "react";
import "./Contact.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Contact() {
  // return (
  //   <div id="contact" className="form-div">
  //     <form action="POST" data-netlify="true" className="contact-form">
  //       <div className="first-row">
  //         <div className="name-field">
  //           <input name="Name" id="senders-name" placeholder="Your Name" />
  //         </div>
  //         <div className="email-field">
  //           <input
  //             name="Email"
  //             id="senders-email"
  //             placeholder="Your email address"
  //           />
  //         </div>
  //       </div>
  //       <div className="second-row">
  //         <div className="message-field">
  //           <input type="textarea" placeholder="Message" rows="7" />
  //         </div>
  //       </div>
  //       <div className="third-row">
  //         <div className="submit-field">
  //           <button type="submit">Send Message</button>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );
  // NEW FORM LAYOUT ------------------------------------------------------------------------------------------//
  return (
    <div className="form-page" id="contact">
      <div class="vignette"></div>
      <header>MESSAGE ME</header>
      <form id="form" className="topBefore">
        <input id="name" type="text" placeholder="Name" />
        <input id="email" type="text" placeholder="Email" />
        <textarea id="message" type="text" placeholder="Message" />
        <input id="submit" type="submit" value="SEND!" />
      </form>
    </div>
  );
}

export default Contact;
