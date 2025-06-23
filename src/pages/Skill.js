import React from "react";
import { Link } from "react-router-dom";

const Skill = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB",
    "Mongoose", "JWT", "REST APIs", "CRUD Operations", "Git & GitHub", "Deployment"
  ];

  const softSkills = [
    "Problem Solving", "Teamwork", "Communication", "Self-Motivation", "Adaptability"
  ];

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      {/* Back Button */}
      <Link to="/" className="btn btn-outline-primary stylish-back mb-4">
        ← Back to Home
      </Link>

      <h2 className="text-center fw-bold text-primary mb-4">My Skills</h2>

      <div className="mb-4">
        <h5 className="text-dark fw-semibold mb-3">🛠 Technical Skills</h5>
        <div className="d-flex flex-wrap gap-2">
          {technicalSkills.map((skill, index) => (
            <span key={index} className="skill-box">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-dark fw-semibold mb-3">🤝 Soft Skills</h5>
        <div className="d-flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <span key={index} className="skill-box">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .skill-box {
          background: #f0f4f8;
          border-radius: 12px;
          padding: 10px 16px;
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: 0.3s ease;
          cursor: default;
        }

        .skill-box:hover {
          background-color: #0d6efd;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .stylish-back {
          transition: all 0.3s ease;
          border-radius: 30px;
          font-weight: 500;
          padding: 8px 20px;
        }

        .stylish-back:hover {
          background-color: #0d6efd;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 14px rgba(13, 110, 253, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Skill;
