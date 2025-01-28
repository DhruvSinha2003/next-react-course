import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      toast("Enter an item!");
    }
  };
  return (
    <div>
      <h1>Grocery Bud</h1>
      <form type="submit">
        <label htmlFor="item">Item</label>
        <input type="text" />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default App;
