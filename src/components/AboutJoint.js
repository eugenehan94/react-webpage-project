import React, { useState } from "react";

const AboutJoint = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section>
      <button
        className="faq-button"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        <h2>{title}</h2>
        <span className="faq-icon"> {showInfo ? "x" : "+"}</span>
      </button>
      <div className="faq-content"> {showInfo && <p>{info}</p>} </div>
    </section>
  );
};

export default AboutJoint;
