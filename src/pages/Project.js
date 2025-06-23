import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Free Fire Tournament Web App",
    description:
      "Full-stack tournament platform with secure user auth and admin match control.",
    tech: "React, Node.js, MongoDB, Express",
    live: "https://freefire-tournament.vercel.app/",
  },
  {
    title: "Product Listing App",
    description:
      "Displays products fetched from an API using Zustand, Axios and React Router.",
    tech: "React, Zustand, Axios",
    live: "https://product-listing-pi-ochre.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Responsive site showcasing my skills and projects.",
    tech: "React, Bootstrap",
    live: "https://surajkc14.com.np/",
  },
];

const Projects = () => {
  return (
    <div className="container py-5">
      {/* Back to Home */}
      <Link to="/" className="btn btn-outline-primary stylish-back mb-4">
        ← Back to Home
      </Link>

      <h2 className="text-center fw-bold text-primary mb-5">My Projects</h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0 project-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-semibold">
                  {project.title}
                </h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <p className="mb-2">
                  <strong>Tech:</strong> {project.tech}
                </p>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-dark mt-auto"
                >
                  🌐 View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Styling */}
      <style>{`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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

export default Projects;
