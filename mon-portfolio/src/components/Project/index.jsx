import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectPage from "./ProjectPage";

function Project({ project, mode }) {
  if (mode === "card") {
    return <ProjectItem project={project} />;
  } else if (mode === "full") {
    return <ProjectPage project={project} />;
  }
}
export default Project;
