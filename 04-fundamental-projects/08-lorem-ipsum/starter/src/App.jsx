import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h3>Form</h3>
      <form className="form">
        <label htmlFor="paragraph" className="form-label">
          Number of paragraphs
        </label>
        <input type="number" id={count} className="form-input" />
        <button className="btn" style={{ margin: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;
