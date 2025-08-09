import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import JobDetails from "../components/JobDetail";
import ResumeBuilder from "../components/ResumeBuilder";
import UserDashboard from "../components/UserDashboard";
import "../components/style/Jobs.css";

export default function Jobs() {
  const [filters, setFilters] = useState({ title: "", location: "", type: "" });
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://remotive.com/api/remote-jobs");
        const data = await response.json();
        const formattedJobs = data.jobs.map((job) => ({
          id: job.id,
          title: job.title,
          company: job.company_name,
          location: job.candidate_required_location || "Remote",
          type: job.job_type || "Full-time",
          description: job.description
        }));
        setJobs(formattedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === "" || job.type === filters.type)
  );

  return (
    <div className="container">
      <div className="filters flex">
        <Filters setFilters={setFilters} />
      </div>

      <div className="jobs-section grid">
        <div className="job-list-container">
          {loading ? (
            <p>Loading jobs...</p>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onSelect={setSelectedJob} />
            ))
          ) : (
            <p>No jobs found matching your filters.</p>
          )}
        </div>

        <div className="job-details-container">
          <JobDetails job={selectedJob} />
        </div>
      </div>

      <div className="extra-section flex">
        <div className="card">
          <ResumeBuilder />
        </div>
        <div className="card">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
}
