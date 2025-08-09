import React, { useState } from "react";
import "../style/ResumeBuilderPage.css";

export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => setImage(null);

  return (
    <>
      <h3 className="resume-title">Resume Builder</h3>

      <div className="resume-builder">
        {/* Form */}
        <form className="resume-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={resumeData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={resumeData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={resumeData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="summary"
            placeholder="Professional Summary"
            value={resumeData.summary}
            onChange={handleChange}
            required
          />
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={resumeData.experience}
            onChange={handleChange}
            required
          />
          <textarea
            name="education"
            placeholder="Education"
            value={resumeData.education}
            onChange={handleChange}
            required
          />
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={resumeData.skills}
            onChange={handleChange}
            required
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && (
            <button type="button" className="btn-remove" onClick={removeImage}>
              Remove Image
            </button>
          )}

          <button type="button" className="btn-primary">
            Download Resume (Not implemented here)
          </button>
        </form>

        {/* Preview */}
        <div className="resume-preview">
          <div className="resume-header">
            <div className="resume-header-text">
              <h4>{resumeData.name || "Your Name"}</h4>
              <p>{resumeData.email} | {resumeData.phone}</p>
            </div>
            {image && (
              <img
                src={image}
                alt="Profile"
                className="resume-image"
              />
            )}
          </div>

          <h5>Summary</h5>
          <p>{resumeData.summary}</p>
          <h5>Experience</h5>
          <p>{resumeData.experience}</p>
          <h5>Education</h5>
          <p>{resumeData.education}</p>
          <h5>Skills</h5>
          <p>{resumeData.skills}</p>
        </div>
      </div>
    </>
  );
}
