import React from "react";
import "./style/JobDetail.css";

export default function JobDetail({ job }) {
  if (!job) {
    return <div className="job-details-container">Select a job to view details</div>;
  }

  return (
    <div className="job-details-container">
      <h2>{job.title}</h2>
      <div className="company-name">{job.company}</div>

      <div className="job-meta">
        <div className="meta-item">📍 {job.location}</div>
        <div className="meta-item">💼 {job.type}</div>
      </div>

      <div
        className="job-description"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />

      <div className="job-actions">
        <button className="btn-apply">Apply Now</button>
        <button className="btn-save">Save Job</button>
      </div>
    </div>
  );
}
