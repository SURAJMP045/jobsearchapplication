import React from "react";
import JobCard from "./JobCard";
import "./style/JobList.css";

export default function JobList({ jobs, onSelect }) {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onSelect={onSelect} />
      ))}
    </div>
  );
}
