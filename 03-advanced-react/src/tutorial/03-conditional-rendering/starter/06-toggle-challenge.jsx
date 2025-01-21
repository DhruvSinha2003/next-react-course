import { useState } from "react";

const ToggleChallenge = () => {
  const [bool, setBool] = useState(false);
  const handleToggle = () => {
    setBool(!bool);
  };

  return (
    <div>
      <h1 style={{ margin: "30px" }}>Toggle Challenge</h1>
      {bool ? (
        <div style={{ backgroundColor: "green" }}>
          <h3>The value of the bool is set to positive</h3>
        </div>
      ) : (
        <div style={{ backgroundColor: "red" }}>
          <h3>The value of the bool is set to negative</h3>
        </div>
      )}
      <button className="btn" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
};

export default ToggleChallenge;
