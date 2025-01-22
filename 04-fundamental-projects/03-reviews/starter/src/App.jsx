import { useEffect, useState } from "react";
import data from "./data";
import Review from "./Review";

const App = () => {
  const [user, setUser] = useState(0);

  const handleNext = () => {
    setUser((user + 1) % data.length);
  };
  const handlePrev = () => {
    setUser((user - 1 + data.length) % data.length);
  };
  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === user) {
      randomNumber = (user + 1) % data.length;
    }
    setUser(randomNumber);
  };

  return (
    <div>
      <h1>Reviews</h1>
      <Review
        user={data[user]}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleRandom={handleRandom}
      />
    </div>
  );
};
export default App;
