import { Link } from "react-router-dom";
import Collapse from "../../Collapse";
import "./projectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../Carousel";

function ProjectPage({ project }) {
  return (
    <>
      <div key={project.id} className="full-project">
        <h1 className="full-project-title">{project.name}</h1>
        <Carousel id={project.id} />
        <div className="icon-description">
          <FontAwesomeIcon icon={faCircleInfo} className="icon-info" />
          <p className="full-project-description">{project.description}</p>
        </div>
        <div className="github-logo-link">
          <img
            src="/images/icons8-github-64.png"
            alt="github-logo"
            className="github-logo"
          />
          <Link to={project.github_link} className="github-link">
            {project.github_link}
          </Link>
        </div>
        <Collapse title="Skills" skills={project.skills} />
      </div>
    </>
  );
}

export default ProjectPage;
