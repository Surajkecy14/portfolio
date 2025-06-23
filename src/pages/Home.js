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
        height: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        padding: "2rem",
      }}
    >
      <h1
        className="mb-5 fw-bold text-center"
        style={{
          fontSize: "3.5rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
        }}
      >
        Welcome to My Portfolio
      </h1>

      <div
        className="d-grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {sections.map((section, index) => {
          const isActive = hoveredIndex === index;

          return (
            <Link
              to={section.to}
              key={index}
              className="d-flex flex-column justify-content-center align-items-center text-white text-decoration-none"
              style={{
                background: isActive
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(255, 255, 255, 0.07)",
                padding: "2.5rem 1rem",
                borderRadius: "1.25rem",
                boxShadow: isActive
                  ? "0 15px 35px rgba(0, 123, 255, 0.6)"
                  : "0 6px 18px rgba(0, 0, 0, 0.2)",
                transition: "all 0.4s ease",
                color: "#fff",
                userSelect: "none",
                transform: isActive ? "scale(1.1)" : "scale(1)",
                cursor: "pointer",
                border: isActive ? "2px solid #007bff" : "2px solid transparent",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <i
                className={`bi ${section.iconClass}`}
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  color: isActive ? "#007bff" : "#ccc",
                  transition: "color 0.4s ease",
                }}
              />
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "1.6rem",
                  textShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              >
                {section.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
