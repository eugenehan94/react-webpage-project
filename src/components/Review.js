import React from "react";
import review from "../data/ReviewsData";
const Review = () => {
  const { name, job, image, text } = review[0];
  return (
    <section>
      <h1>Review Component</h1>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{job}</p>
      <p>{text}</p>
      <button>Left button</button>
      <button>Right button</button>
    </section>
  );
};

export default Review;
