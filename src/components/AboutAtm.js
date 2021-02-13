import React, { useState } from "react";

const AboutAtm = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section>
      <button className="faq-button" onClick={() => setShowInfo(!showInfo)}>
        <h2>{title}</h2>
        {showInfo ? "x" : "+"}
      </button>
      {showInfo && <p>{info}</p>}
    </section>
  );
};

export default AboutAtm;
