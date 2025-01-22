import { useEffect, useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [queArray, setQueArray] = useState(data);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h1 className="title">Questions</h1>
      {queArray.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            question={question}
            isActive={activeQuestion === question.id}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </div>
  );
};
export default App;
