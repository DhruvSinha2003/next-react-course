import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("Before setCount ", count);
    setCount(count + 1);
    console.log("After setCount ", count);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </>
  );
};

export default UseStateGotcha;
