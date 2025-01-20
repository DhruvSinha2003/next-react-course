import { useState } from "react";
import Person from "./components/Person";
import data from "./data";

const App = () => {
  const [person, setPerson] = useState(data);
  const [count, setCount] = useState(person.length);

  const handleClear = () => {
    setPerson([]);
    setCount(0);
  };

  return (
    <div>
      <h1>{count} Birthdays today!</h1>
      {person.map((person) => (
        <Person key={person.id} person={person} />
      ))}
      <button className="btn" onClick={handleClear}>
        Clear List
      </button>
    </div>
  );
};

export default App;
