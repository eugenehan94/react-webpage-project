import React, { useState } from "react";

import NavBar from "./components/NavBar";

import Head from "./components/Head";

import About from "./components/About";
import aboutData from "./data/AboutData";

import AboutJoint from "./components/AboutJoint";
import jointData from "./data/JointData";

import AboutAtm from "./components/AboutAtm";
import atmData from "./data/AtmData";

import Review from "./components/Review";

import Footer from "./components/Footer";

function App() {
  const [about, setAbout] = useState(aboutData);
  const [aboutJoint, setAboutJoint] = useState(jointData);
  const [aboutAtm, setAboutAtm] = useState(atmData);

  return (
    <div>
      <NavBar />
      <Head />
      <div className="faq-container">
        <h1>About</h1>

        {about.map((about) => {
          return <About {...about} />;
        })}

        <h1>Accounts</h1>
        <h2>Joint accounts</h2>
        {aboutJoint.map((aboutJoint) => {
          return <AboutJoint {...aboutJoint} />;
        })}

        <h2>ATM</h2>
        {aboutAtm.map((aboutAtm) => {
          return <AboutAtm {...aboutAtm} />;
        })}
      </div>
      <h1>Reviews</h1>
      <Review />
      <Footer />
    </div>
  );
}

export default App;
