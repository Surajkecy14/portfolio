import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      {/* Back Button */}
      <Link to="/" className="btn btn-outline-primary stylish-back mb-4">
        ← Back to Home
      </Link>

      <h2 className="text-center fw-bold text-primary mb-4">Contact Me</h2>

      <div className="card shadow-sm p-4 rounded">
        <p>
          📧 Email:{" "}
          <a href="mailto:surajkecy14@email.com" className="text-decoration-none">
            surajkecy14@email.com
          </a>
        </p>
        <p>📍 Location: Kathmandu, Nepal</p>

        <h5 className="mt-4 mb-3">Connect with me</h5>
        <div className="d-flex gap-3 flex-wrap">
          <a
            href="https://www.linkedin.com/in/suraj-kc-6b0a48309/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Surajkecy14"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            GitHub
          </a>
          <a
            href="https://wa.me/97797271161"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-4 fst-italic">
          Feel free to get in touch — whether it’s for internship opportunities,
          project collaborations, or just a friendly hello!
        </p>
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

export default Contact;
