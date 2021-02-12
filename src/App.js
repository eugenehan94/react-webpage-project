import React, { useState } from "react";

import Head from "./components/Head";

import About from "./components/About";
import aboutData from "./data/AboutData";

import AboutJoint from "./components/AboutJoint";
import jointData from "./data/JointData";

import AboutAtm from "./components/AboutAtm";
import atmData from "./data/AtmData";

import Review from "./components/Review";
import reviews from "./data/ReviewsData";

function App() {
  const [about, setAbout] = useState(aboutData);
  const [aboutJoint, setAboutJoint] = useState(jointData);
  const [aboutAtm, setAboutAtm] = useState(atmData);

  const [review, setReviews] = useState(reviews);

  return (
    <div>
      <Head />
      <h1>About</h1>
      {about.map((about) => {
        return <About {...about} />;
      })}

      <h1>Accounts</h1>
      <h3>Joint accounts</h3>
      {aboutJoint.map((aboutJoint) => {
        return <AboutJoint {...aboutJoint} />;
      })}
      <h3>ATM</h3>
      {aboutAtm.map((aboutAtm) => {
        return <AboutAtm {...aboutAtm} />;
      })}

      <h1>Reviews</h1>
      <Review {...review} />
    </div>
  );
}

export default App;
