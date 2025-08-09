import React from "react";
import "./style/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">JobFinder</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Jobs</li>
        <li>Dashboard</li>
        <li>Resume Builder</li>
      </ul>
    </nav>
  );
}
