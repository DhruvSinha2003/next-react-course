import { useState } from "react";
import Person from "./components/Person";
import data from "./data";

const App = () => {
  const [person, setPerson] = useState(data);

  const handleClear = () => {
    setPerson([]);
  };

  return (
    <div>
      <h1>{person.length} Birthdays today!</h1>
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
