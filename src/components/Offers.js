import React from "react";
import Offer from "./Offer";

const Offers = ({ offerList }) => {
  return (
    <section>
      <div>
        <h1>Offers</h1>
      </div>
      <div>
        <p>Return each tour</p>
        {offerList.map((offer) => {
          return <Offer key={offer.id} {...offer} />;
        })}
      </div>
    </section>
  );
};

export default Offers;
