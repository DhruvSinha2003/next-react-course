import React from "react";

const Review = ({ user, handleNext, handlePrev, handleRandom }) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={user.image}
        alt={user.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
      <h2 style={{ margin: "10px 0" }}>{user.name}</h2>
      <h4 style={{ color: "#555", margin: "10px 0" }}>{user.job}</h4>
      <p style={{ color: "#777", marginBottom: "20px" }}>{user.text}</p>
      <div>
        <button
          className="btn"
          onClick={handlePrev}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={handleNext}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next
        </button>
        <button
          className="btn"
          onClick={handleRandom}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#ffc107",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Random
        </button>
      </div>
    </div>
  );
};

export default Review;
