import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h3>Counter</h3>
      <h4>{count}</h4>
      <button onClick={handleClick}>Increment counter</button>
    </>
  );
};

export default ErrorExample;
