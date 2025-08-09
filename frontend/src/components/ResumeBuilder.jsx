import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/ResumeBuilder.css";

export default function ResumeBuilder() {
  const navigate = useNavigate();

  return (
    <div className="resume-builder">
      <h3>Build Your Resume</h3>
      <p>Create a professional resume with our easy builder.</p>
      <button
        className="btn-primary"
        onClick={() => navigate("/resume-builder")}
      >
        Start Building
      </button>
    </div>
  );
}
