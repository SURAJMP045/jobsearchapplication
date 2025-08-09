import React from "react";
import "./style/UserDashboard.css";

export default function UserDashboard() {
  return (
    <div className="user-dashboard">
      <h3>Your Dashboard</h3>
      <p>Track your job applications and saved jobs here.</p>
      <button className="btn-secondary">View Applications</button>
    </div>
  );
}
