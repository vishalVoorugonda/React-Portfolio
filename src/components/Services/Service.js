import React, { useEffect, useRef } from "react";
import "../../styles/service.css";
import Resume from "../../assets/Resume_Vishal.pdf";
function Service() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return (
    <div className="myservice-container" id="domains">
      <div className="service-details">
        <h1>My Services &</h1>
        <h1 className="skill">Skills</h1>
        <p>Iam Working in corporate since last 12 years</p>
        <p>I have worked on than 100+ projects</p>
        <a href={Resume} download={Resume}>
          <button className="download-cv">Download CV</button>
        </a>
      </div>
      <div className="cards-container">
        <div className="card card-1" ref={(el) => (cardsRef.current[0] = el)}>
          <h1>😎</h1>
          <p className="designation">CEO</p>
          <p className="content">
            Passionate about building and leading digital products — whetherI
            love turning ideas into reality through technology.
          </p>
        </div>
        <div className="card card-2" ref={(el) => (cardsRef.current[1] = el)}>
          <h1>😀</h1>
          <p className="designation">Software Developer</p>
          <p className="content">
            Passionate about building and leading digital products — whetherI
            love turning ideas into reality through technology.
          </p>
        </div>
        <div className="card card-3" ref={(el) => (cardsRef.current[2] = el)}>
          <h1>😍</h1>
          <p className="designation">web Developer</p>
          <p className="content">
           Passionate about building and leading digital products — whetherI
            love turning ideas into reality through technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
