import React from "react";

const JobDuties = ({ duties }) => {
  if (!duties) {
    return <p>No duties available</p>;
  }

  return (
    <div>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDuties;
