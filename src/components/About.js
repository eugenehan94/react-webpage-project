import React, { useState } from "react";

const About = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section>
      <button className="faq-button" onClick={() => setShowInfo(!showInfo)}>
        <h2>{title}</h2>
        {showInfo ? "x" : "+"}
      </button>
      <div className="faq-content">{showInfo && <p>{info}</p>}</div>
    </section>
  );
};

export default About;
