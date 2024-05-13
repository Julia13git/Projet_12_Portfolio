import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectItem from "../../components/ProjectItem";
import { projectList } from "../../datas/projectList";
import "./projects.css";
// import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title">Projets</h1>
        <div className="projects-list">
          {projectList.map((project) => (
            // <Link
            //   to={`/project/${project.id}`}
            //   className="project-link"
            //   key={project.name}
            // >
            <ProjectItem project={project} key={project.id} />
            // </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
