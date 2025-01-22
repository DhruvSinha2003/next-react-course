import { useEffect, useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [queArray, setQueArray] = useState(data);
  console.log(queArray);
  return (
    <div>
      <h1 className="title">Questions</h1>
      {queArray.map((question) => {
        return <SingleQuestion key={question.id} question={question} />;
      })}
    </div>
  );
};
export default App;
