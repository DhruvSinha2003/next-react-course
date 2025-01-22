import React, { useState } from "react";

const SingleQuestion = ({ question, isActive, toggleQuestion }) => {
  const [toggleInfo, setToggleInfo] = useState(false);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <button
        className="btn"
        onClick={() => toggleQuestion(question.id)}
        style={{
          width: "100%",
          padding: "10px",
          textAlign: "left",
          backgroundColor: "#000",
          border: "none",
          borderBottom: "1px solid #ddd",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        {question.title}
      </button>
      {isActive && (
        <div style={{ padding: "10px 0" }}>
          <p>{question.info}</p>
          <button
            className="btn"
            onClick={() => toggleQuestion(question.id)}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Hide info
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleQuestion;
