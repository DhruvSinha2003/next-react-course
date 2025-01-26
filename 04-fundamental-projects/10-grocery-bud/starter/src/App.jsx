import { useState } from "react";
import Form from "./Form";
const App = () => {
  const [item, setItem] = useState("");

  const Form = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <form type="submit">
        <label htmlFor="item">Item</label>
        <input type="text" />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  };
};

export default App;
