import React, { useState } from "react";
import "./style/Filters.css";

export default function Filters({ setFilters }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const applyFilters = () => {
    setFilters({ title, location, type });
  };

  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Remote">Remote</option>
      </select>
      <button className="btn-primary" onClick={applyFilters}>Search</button>
    </div>
  );
}
