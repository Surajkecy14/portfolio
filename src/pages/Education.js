import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      {/* Back Button */}
      <Link to="/" className="btn btn-outline-primary stylish-back mb-4">
        ← Back to Home
      </Link>

      <h2 className="text-center fw-bold text-primary mb-5">Education</h2>

      <div className="card shadow-sm p-4 rounded mb-4">
        <h4 className="mb-2">Grameen Adarsha Multiple Campus</h4>
        <p className="mb-1 text-muted">+2 in Computer Science Management</p>
        <p className="mb-1">Graduation Year: 2024</p>
      </div>

      {/* Custom Button Style */}
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

export default Education;
