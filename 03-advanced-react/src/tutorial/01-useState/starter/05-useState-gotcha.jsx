import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   console.log("Before setCount ", count);
  //   setCount(count + 1);
  //   console.log("After setCount ", count);
  // };
  // const handleClick = () => {
  //   console.log("Before setCount ", count);
  //   setCount((prevState) => {
  //     return prevState + 1;
  //   });
  //   console.log("After setCount ", count);
  // };

  const handleClick = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 1000);
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
