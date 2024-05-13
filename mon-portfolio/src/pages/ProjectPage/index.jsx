import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projectList } from "../../datas/projectList";
import { useParams } from "react-router-dom";
import ProjectItem from "../../components/ProjectItem";

function ProjectPage() {
  const { id } = useParams();
  const project = projectList.find((project) => project.id === id);
  // if (!project) {
  //   return <PageError />;
  // }
  return (
    <>
      <Header />
      <ProjectItem key={project.id} project={project} />
      <Footer />
    </>
  );
}
export default ProjectPage;
