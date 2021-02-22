import React, { useState } from "react";

const Offer = ({ id, name, info, image, price }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="offer-wrapper">
      <img src={image} alt={name} />

      <div className="offer-info">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <div>
        <p>
          {showInfo ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "show less" : "show more"}
          </button>
        </p>
      </div>
      <button>remove</button>
    </article>
  );
};

export default Offer;
