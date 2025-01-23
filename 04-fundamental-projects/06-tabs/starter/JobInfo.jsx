import React from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ job }) => {
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
      <h1 style={{ marginBottom: "10px" }}>{job.company}</h1>
      <h3 style={{ marginBottom: "10px", color: "#555" }}>{job.title}</h3>
      <span style={{ display: "block", marginBottom: "20px", color: "#888" }}>
        {job.dates}
      </span>
      {job.duties.length > 0 ? (
        <JobDuties duties={job.duties} />
      ) : (
        <p>Duties data not available</p>
      )}
    </div>
  );
};

export default JobInfo;
