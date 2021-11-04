import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label>
            <input
              className="star"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              
            />
            <FaStar
              size={25}
              color={ratingValue <= (rating || hover) ? "orange" : "black"}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default Rating;
