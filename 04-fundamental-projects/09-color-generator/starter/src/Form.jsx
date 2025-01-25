import React, { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("ffffff");
  const handleSubmit = (e = {});
  return (
    <div>
      <form className="form">
        <label htmlFor="color" className="form-label">
          Color:
        </label>
        <input
          type="color"
          style={{ height: "50px" }}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-input"
          style={{ borderColor: "black" }}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </form>
      <h3>{color.toString()}</h3>
    </div>
  );
};

export default Form;
