import React, { useState } from "react";

const AboutAtm = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <h2>{title}</h2>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "x" : "+"}
      </button>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default AboutAtm;
