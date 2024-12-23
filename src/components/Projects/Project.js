import React from "react";
import MarkdownContent from "../Common/MarkdownContent";
import { loadContent } from "../../utils/projectUtils";

function Project() {
  const loadProjectContent = async (slug) => {
    const projects = await loadContent("projects");
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw new Error("Project not found");
    return project;
  };

  return <MarkdownContent type="project" loadContent={loadProjectContent} />;
}

export default Project;
