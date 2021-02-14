import React, { useState } from "react";
import review from "../data/ReviewsData";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text } = review[index];

  const next = () => {
    setIndex((index) => {
      let nextIndex = index + 1;
      return check(nextIndex);
    });
  };

  const previous = () => {
    setIndex((index) => {
      let previousIndex = index - 1;
      return check(previousIndex);
    });
  };

  const check = (result) => {
    if (result > review.length - 1) {
      return 0;
    } else if (result < 0) {
      return review.length - 1;
    }
    return result;
  };

  return (
    <section>
      <div className="review-container">
        <h1>Review Component</h1>
        <img src={image} alt={name} />

        <p>{name}</p>

        <p>{text}</p>
        <button onClick={previous}>Left button</button>
        <button onClick={next}>Right button</button>
      </div>
    </section>
  );
};

export default Review;
