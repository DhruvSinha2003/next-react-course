import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Dhruv");
  const [age, setAge] = useState(21);
  const [hobby, setHobby] = useState("Jackin offffff");

  const displayPerson = () => {
    setName("John");
    setAge(25);
    setHobby("Not nobbing it");
  };

  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Change person
      </button>
    </>
  );
};

export default UseStateObject;
