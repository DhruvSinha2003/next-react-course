import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <div>
        <h3>{person.name}</h3>
        <h5>{person.age}</h5>
        <img
          src={person.image}
          alt="photo"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
      </div>
    </div>
  );
};

export default Person;
