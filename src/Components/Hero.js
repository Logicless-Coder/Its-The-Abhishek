import React from "react";
import "./Hero.css";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="overlay"></div>
      <div className="hero-title">
        <p id="hi">Hi!</p>
        <p id="name">I am Abhishek Rathore.</p>
      </div>
      <div className="social-links">
        <ul className="social-links-list">
          <li>
            <a href="https://github.com/Logicless-Coder">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishek-rathore-9a203b1ab/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/its.the.abhishek/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="mailto:abhirathore565@gmail.com">
              <FiMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
