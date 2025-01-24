import React from "react";
import avatar from "../../../assets/default-avatar.svg";
const Person = ({ person }) => {
  //   const img =
  //     person.images &&
  //     person.images[0] &&
  //     person.images[0].small &&
  //     person.images[0].small.url;

  const img = person.images?.[0]?.small?.url || avatar;

  return (
    <div>
      <img src={img} alt={person.name} style={{ width: "80px" }} />

      <h1>{person.name}</h1>
      {person.nickName ? (
        <h3>{person.nickName}</h3>
      ) : (
        <p>No nickname provided</p>
      )}
    </div>
  );
};

export default Person;
