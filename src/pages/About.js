import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "800px" }}>
        <Link to="/" className="btn btn-outline-primary stylish-back mb-4">
        ← Back to Home
      </Link>
      <h2 className="mb-4 text-center fw-bold text-primary">About Me</h2>

      <div className="card shadow-sm p-4 border-0 rounded">
        <p>
          Hello! I'm <strong>Suraj K.C.</strong>, a passionate MERN Stack Developer.
          I completed my +2 education with a Computer Science background and have been deeply involved
          in building full-stack web applications ever since.
        </p>

        <p>
          I love creating real-world solutions using technology. My focus is on building
          user-friendly, responsive, and dynamic web apps using technologies like React, Node.js, and MongoDB.
        </p>

        <p>
          My goal is to gain hands-on experience by contributing to real projects through an internship.
          I’m eager to learn from experienced developers and improve my problem-solving, teamwork, and communication skills.
        </p>

        <p>
          When I'm not coding, I enjoy sipping tea 🍵, watching tech videos, exploring AI.
        </p>
      </div>
    </div>
  );
};

export default About;
