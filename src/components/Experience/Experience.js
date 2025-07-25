import React, { useEffect, useRef, useState } from "react";
import "../../styles/experience.css";

function Experience() {
     const whiteDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const target = whiteDivRef.current;
        if (entry.isIntersecting) {
          target.classList.remove("rotate"); 
          void target.offsetWidth; 
          target.classList.add("rotate");
        }
      },
      { threshold: 0.5 } 
    );

    if (whiteDivRef.current) {
      observer.observe(whiteDivRef.current);
    }

    return () => {
      if (whiteDivRef.current) observer.unobserve(whiteDivRef.current);
    };
  }, []);
  return (
    <div className="experience-container" id="experience">
      <div className="experience-details">
        <h1 className="title">Works for All these</h1>
        <h1 className="name">Brands & Clients</h1>
        <div className="details">
          <span>I have worked in 10+ compaines in last 12 years</span>
          <span>
            I have worked in different domains like Software Developer and Web
            Developer
          </span>
          <span>I have worked in 100+ projects in different domains</span>
          <span>I have sufficient experience to join any company as CEO</span>
        </div>
        <button className="hire">Hire me</button>
      </div>
      <div className="right-side">
        <div className="blue-circle"></div>
        <div className="yellow-circle"></div>
          <div className="white-div" ref={whiteDivRef}>
            <div className="circle-div up"><img src="https://t4.ftcdn.net/jpg/04/44/04/77/240_F_444047749_S6JR53H8nLTeacGedL95OZPAef8BzG2W.jpg" alt="up-logo"/></div>
            <div className="circle-div shopify"><img src="https://t3.ftcdn.net/jpg/07/49/92/74/240_F_749927433_pi6ULPpkZAUwjhlgUp6wwQEpcaaiu9C7.jpg" alt="shopify"/></div>
            <div className="circle-div amazon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQWIK3P0gw2YhLw62fH_nv7dJm-seGkXMiPixiPIbjHKRyjN-jPlGS-6ShSe99-uMI9k&usqp=CAU" alt="amazon"/></div>
            <div className="circle-div facebook"><img src="https://t4.ftcdn.net/jpg/03/98/85/79/240_F_398857947_98HA0SRd9gWtUcJBjtskrk1vGEWWamQa.jpg" alt="facebook"/></div>
            <div className="circle-div fi"><img src="https://t4.ftcdn.net/jpg/01/77/51/33/240_F_177513388_rZrcxOyNZfpfX8k7401XCZ2hv2TOOax6.jpg" alt="fi-logo"/></div>
          </div>
      </div>
    </div>
  );
}

export default Experience;
