import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Service from "./components/Services/Service";
import Works from "./components/Works/Works";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <div>
      <Navbar />
      <Intro />
      <Service />
      <Works />
      <Experience />
      <Contact />
      <Footer />
      <div className="blobs-container">
        <div className="blob" style={{ backgroundColor: "#ff6ec7" }}></div>
        <div className="blob" style={{ backgroundColor: "#6ec1ff" }}></div>
        <div className="blob" style={{ backgroundColor: "#a1ff6e" }}></div>
      </div>
    </div>
  );
}

export default App;
