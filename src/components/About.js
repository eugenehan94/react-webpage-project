import React, { useState } from "react";
import aboutData from "../data/AboutData";

const About = ({ title, info, id }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section>
      {aboutData.map((item, id) => {
        return (
          <React.Fragment key={id}>
            <button className="faq-button" onClick={() => toggle(id)}>
              <h2>{item.title}</h2>
              <span className="faq-icon">{clicked === id ? "x" : "+"}</span>
            </button>
            <div className="faq-content">
              {clicked === id ? <p>{item.info}</p> : null}
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default About;
