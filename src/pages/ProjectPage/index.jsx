import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projectList } from "../../datas/projectList";
import { useParams } from "react-router-dom";
import Project from "../../components/Project";

function ProjectPage() {
  const { id } = useParams();
  const project = projectList.find((project) => project.id === id);
  // if (!project) {
  //   return <PageError />;
  // }
  return (
    <>
      <Header />
      <Project key={project.id} project={project} mode="full" />
      <Footer />
    </>
  );
}
export default ProjectPage;
