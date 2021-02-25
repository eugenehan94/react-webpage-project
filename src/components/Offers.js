import React from "react";
import Offer from "./Offer";

const Offers = ({ offerList, removeOffer }) => {
  return (
    <section>
      <div className="offer-heading">
        <h1>{offerList.length === 0 ? null : <h1>Offers</h1>} </h1>
      </div>
      <div className="offers-container">
        {offerList.map((offer) => {
          return <Offer key={offer.id} removeOffer={removeOffer} {...offer} />;
        })}
      </div>
    </section>
  );
};

export default Offers;
