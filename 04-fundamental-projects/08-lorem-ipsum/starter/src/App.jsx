import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = (e) => {
    setCount(e.target.value);
  };
  return (
    <section className="section-center">
      <form className="form">
        <label htmlFor="amount" className="form-label">
          Number of paragraphs
        </label>
        <input
          type="number"
          value={count}
          id="amount"
          className="form-input"
          min="1"
          max="8"
          step="1"
          onChange={handleIncrement}
        />
        <button className="btn" type="submit" style={{ margin: "10px" }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default App;
