import React from "react";

const Review = ({ user, handleNext, handlePrev, handleRandom }) => {
  return (
    <div>
      <img src={user.image} alt={user.name} style={{ maxWidth: "100px" }} />
      <h2>{user.name}</h2>
      <span>{user.job}</span>
      <span>{user.text}</span>
      <div>
        <button className="btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
        <button className="btn" onClick={handleRandom}></button>
      </div>
    </div>
  );
};

export default Review;
