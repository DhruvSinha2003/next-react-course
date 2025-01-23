import React from "react";

const JobDuties = ({ duties }) => {
  if (!duties) {
    return <p>No duties available</p>;
  }

  return (
    <div>
      <ul style={{ paddingLeft: "20px" }}>
        {duties.map((duty, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              color: "#555",
              listStyleType: "disc",
            }}
          >
            {duty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDuties;
