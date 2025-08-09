import React from "react";
import "./style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>JobFinder</h4>
          <p>Helping you land your dream job.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Dashboard</li>
            <li>Resume Builder</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: support@jobfinder.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  );
}
