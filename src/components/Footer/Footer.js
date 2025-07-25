import React from 'react'
import "../../styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-wrapper">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    >
      <path
        fill="orange"
        fillOpacity="1"
        d="M0,128L80,122.7C160,117,320,107,480,85.3C640,64,800,32,960,21.3C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
      <div className="footer-container">
        <span>vishalvoorugonda28@gmail.com</span>
        <div className="links-image">
          <a href="https://github.com/vishalvoorugonda" target="_blank" rel="noopener noreferrer" className="social-icons git">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/vishalvoorugonda" target="_blank" rel="noopener noreferrer" className="social-icons linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
