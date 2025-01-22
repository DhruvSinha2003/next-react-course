import React, { useState } from "react";

const SingleQuestion = ({ question }) => {
  const [toggleInfo, setToggleInfo] = useState(false);

  return (
    <div>
      <h1>Question: {question.title}</h1>
      {toggleInfo ? (
        <div>
          <h3>{question.info}</h3>
          <button
            className="btn"
            onClick={() => {
              setToggleInfo(false);
            }}
          >
            Hide info
          </button>
        </div>
      ) : (
        <button
          className="btn"
          onClick={() => {
            setToggleInfo(true);
          }}
        >
          Show info
        </button>
      )}
    </div>
  );
};

export default SingleQuestion;
