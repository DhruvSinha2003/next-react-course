import React from "react";

const Person = ({ person: { name, age, image } }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h5>{age}</h5>
        <img
          src={image}
          alt={name}
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
            borderRadius: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default Person;
