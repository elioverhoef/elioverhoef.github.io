import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { loadContent } from "../../utils/projectUtils";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectData = await loadContent("projects");
        setProjects(projectData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects");
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading projects...</p>
          </div>
        </Container>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="error-message">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <Link
                to={`/project/${project.slug}`}
                style={{ textDecoration: "none" }}
              >
                <ProjectCard
                  imgPath={project.image}
                  isBlog={false}
                  title={project.title}
                  description={project.excerpt}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
