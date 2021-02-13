import React, { useState } from "react";

const About = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section>
      <button className="faq-button" onClick={() => setShowInfo(!showInfo)}>
        <h2>{title}</h2>
      </button>
      {showInfo && <p>{info}</p>}
    </section>
  );
};

export default About;
