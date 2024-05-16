import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projectList } from "../../datas/projectList";
import "./projects.css";
import Project from "../../components/Project";

function Projects() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title">Projets</h1>
        <div className="projects-list">
          {projectList.map((project) => (
            <Project project={project} key={project.id} mode="card" />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
