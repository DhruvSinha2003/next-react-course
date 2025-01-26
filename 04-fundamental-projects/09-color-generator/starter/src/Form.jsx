import React, { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("ffffff");
  const handleSubmit = (e) => {};
  return (
    <div>
      <form className="color-form" onSubmit={handleSubmit}>
        <label htmlFor="color" className="form-label">
          Color:
        </label>
        <input
          type="color"
          value={color}
          style={{ height: "50px" }}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-input"
          style={{ borderColor: "black" }}
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
      ={" "}
    </div>
  );
};

export default Form;
