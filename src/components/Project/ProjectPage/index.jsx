import { Link } from "react-router-dom";
import Collapse from "../../Collapse";
import "./projectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function ProjectPage({ project }) {
  return (
    <>
      <div key={project.id} className="full-project">
        <h1 className="full-project-title">{project.name}</h1>
        <img
          src={project.image}
          alt={project.name}
          className="full-project-image"
        />
        <div className="icon-description">
          <FontAwesomeIcon icon={faCircleInfo} className="icon-info" />
          <p className="full-project-description">{project.description}</p>
        </div>
        <div className="github-logo-link">
          <img src="/images/github-logo.png" alt="github-logo" />
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