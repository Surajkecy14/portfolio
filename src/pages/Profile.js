import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      {/* Back Button */}
      <Link to="/" className="btn btn-outline-primary stylish-back mb-4">
        ← Back to Home
      </Link>

      <div className="card shadow-sm p-4 rounded">
        <div className="d-flex align-items-center mb-4">
          <img
            src="/suraj.jpg"
            alt="Suraj K.C."
            className="rounded-circle me-4"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <div>
            <h2 className="mb-1">Suraj K.C.</h2>
            <h5 className="text-primary">MERN Stack Developer | Web Developer</h5>
            <p className="mb-0 text-muted">Kathmandu, Nepal</p>
          </div>
        </div>

        <p>
          I am a passionate MERN stack developer with experience building responsive and dynamic web applications. I love coding and continuously improving my skills through real projects and challenges. Currently seeking an internship opportunity where I can contribute and grow professionally.
        </p>

        <h6 className="mt-4 mb-3">Key Skills</h6>
        <ul className="list-inline">
          {["React", "Node.js", "Express", "MongoDB", "JavaScript", "Bootstrap", "Git"].map((skill, index) => (
            <li
              key={index}
              className="list-inline-item badge bg-primary text-white me-2 mb-2"
              style={{ fontSize: "0.9rem", padding: "0.5em 0.75em" }}
            >
              {skill}
            </li>
          ))}
        </ul>

        <h6 className="mt-4 mb-2">Contact</h6>
        <p>Email: <a href="mailto:surajkecy14@email.com">suraj.kecy14@email.com</a></p>

        <div className="d-flex flex-wrap gap-2 mt-3">
          <a
            href="https://www.linkedin.com/in/suraj-kc-6b0a48309/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/Surajkecy14"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            💻 GitHub
          </a>
        </div>
      </div>

      {/* Custom Button Styles */}
      <style>{`
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

export default Profile;
