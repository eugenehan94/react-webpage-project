import React, { useState } from "react";
import review from "../data/ReviewsData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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
        <div className="review-box">
          <div className="review-container-previous">
            <button className="review-previous-btn" onClick={previous}>
              <FaArrowAltCircleLeft />
            </button>
          </div>
          <div className="review-container-1">
            <img src={image} alt={name} className="review-image" />
          </div>
          <div className="review-container-next">
            <button className="review-next-btn" onClick={next}>
              <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="review-container-2">
            <h1>{name}</h1>
          </div>
          <div className="review-container-3">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
