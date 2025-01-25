import { useState } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [texts, setTexts] = useState([]);
  const handleIncrement = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setTexts(text.slice(0, amount));
  };
  return (
    <section className="section-center">
      <form className="form" onSubmit={handleSubmit}>
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
      {texts.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </section>
  );
};
export default App;
