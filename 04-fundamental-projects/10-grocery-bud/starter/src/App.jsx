import { useState } from "react";
const App = () => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form type="submit">
        <label htmlFor="item">Item</label>
        <input type="text" />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
