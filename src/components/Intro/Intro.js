import React from "react";
import "../../styles/intro.css";
import photo from "../../assets/my-pic.jpeg.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Intro() {
  return (
    <div className="intro-container" id="home">
      <div className="intro-details">
        <h1 className="title">Hi! I Am</h1>
        <h1 className="name">Vishal Voorugonda</h1>
        <p className="content">
          I’m a Front-End Developer and a recent graduate in Civil Engineering
          from Jayamukhi Institute of Technological Sciences. After completing
          my B.Tech, I joined Coding Ninjas to pursue my passion for web
          development and enhance my programming skills. I'm now focused on
          building modern, responsive websites and continuously improving my
          frontend development portfolio.
        </p>
        <button className="hire">Hire me</button>
        <div className="links-img">
          <a
            href="https://github.com/vishalvoorugonda"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon git"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/vishalvoorugonda"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="my-pic">
        <img src={photo} alt="my-img" />
      </div>
    </div>
  );
}

export default Intro;
