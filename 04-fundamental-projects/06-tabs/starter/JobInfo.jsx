import React from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ job }) => {
  return (
    <div>
      <h1>{job.company}</h1>
      <h3>{job.title}</h3>
      <span>{job.dates}</span>
      {job.duties.length > 1 ? (
        <JobDuties duties={job.duties} />
      ) : (
        <p>Duties data not available</p>
      )}
    </div>
  );
};

export default JobInfo;
