import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectItem from "../../components/ProjectItem";
import { projetsList } from "../../datas/projectList";
import "./projects.css";

function Projects() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title">Projets</h1>
        <div className="projects-list">
          {projetsList.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.name}
              image={project.image}
              description={project.description}
              github_lien={project.github_link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
