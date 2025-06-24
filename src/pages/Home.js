import React, { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  { title: "Profile", to: "/profile", iconClass: "bi-person-circle" },
  { title: "About Me", to: "/about", iconClass: "bi-info-circle" },
  { title: "Skills", to: "/skill", iconClass: "bi-code-slash" },
  { title: "Projects", to: "/project", iconClass: "bi-kanban" },
  { title: "Education", to: "/education", iconClass: "bi-mortarboard" },
  { title: "Contact Me", to: "/contact", iconClass: "bi-envelope" },
];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        padding: "2rem 1rem",
      }}
    >
      <h1
        className="mb-4 fw-bold text-center"
        style={{
          fontSize: "2.8rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
        }}
      >
        Welcome to My Portfolio
      </h1>

      <div
        className="row w-100 justify-content-center"
        style={{ maxWidth: "900px" }}
      >
        {sections.map((section, index) => {
          const isActive = hoveredIndex === index;

          return (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
            >
              <Link
                to={section.to}
                className="text-white text-decoration-none w-100"
                style={{
                  background: isActive
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(255, 255, 255, 0.07)",
                  padding: "2rem 1rem",
                  borderRadius: "1.25rem",
                  boxShadow: isActive
                    ? "0 15px 35px rgba(0, 123, 255, 0.6)"
                    : "0 6px 18px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.4s ease",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  cursor: "pointer",
                  border: isActive ? "2px solid #007bff" : "2px solid transparent",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <i
                  className={`bi ${section.iconClass}`}
                  style={{
                    fontSize: "2.2rem",
                    marginBottom: "0.75rem",
                    color: isActive ? "#007bff" : "#ccc",
                    transition: "color 0.4s ease",
                  }}
                />
                <h5
                  style={{
                    fontWeight: "600",
                    fontSize: "1.2rem",
                    textShadow: "0 0 5px rgba(0,0,0,0.2)",
                  }}
                >
                  {section.title}
                </h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
