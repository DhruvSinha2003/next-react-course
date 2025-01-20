import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("Dhruv");
  // const [age, setAge] = useState(21);
  // const [hobby, setHobby] = useState("Jackin offffff");

  const [obj, setObj] = useState({
    name: "Dhruv",
    age: 21,
    hobby: "Jacking offfff",
  });

  const displayPerson = () => {
    setObj({
      name: "John",
      age: 28,
      hobby: "Not nobbing it",
    });
  };

  return (
    <>
      <h2>{obj.name}</h2>
      <h3>{obj.age}</h3>
      <h4>Enjoys: {obj.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Change person
      </button>
    </>
  );
};

export default UseStateObject;
