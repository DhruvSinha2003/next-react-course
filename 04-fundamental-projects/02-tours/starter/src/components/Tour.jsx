import React from "react";

const Tour = ({ id, image, info, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>{info}</span>
      <span>{price}</span>
    </div>
  );
};

export default Tour;
