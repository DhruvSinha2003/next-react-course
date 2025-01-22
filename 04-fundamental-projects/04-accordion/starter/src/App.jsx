import { useEffect, useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [queArray, setQueArray] = useState(data);
  console.log(queArray);
  return (
    <div>
      <h1 className="title">Questions</h1>
      <SingleQuestion question={queArray[0]} />
    </div>
  );
};
export default App;
