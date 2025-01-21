import React, { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [bool, setBool] = useState(false);

  const Example = () => {
    useEffect(() => {
      console.log("Within UseEffect");
    }, []);
    return <h1>Truthy</h1>;
  };

  return (
    <div>
      <h1>Cleanup Function</h1>
      <button className="btn" onClick={() => setBool(!bool)}>
        Toggle
      </button>
      {bool && <Example />}
    </div>
  );
};

export default CleanupFunction;
