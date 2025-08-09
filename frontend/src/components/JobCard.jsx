import React from "react";
import "./style/JobCard.css";

export default function JobCard({ job, onSelect }) {
  return (
    <div className="job-card" onClick={() => onSelect(job)}>
      <h3>{job.title}</h3>
      <p>
        <strong>{job.company}</strong> – {job.location}
      </p>
      <span className={`job-type ${job.type.toLowerCase().replace(" ", "-")}`}>
        {job.type}
      </span>
    </div>
  );
}
