import { Link } from "react-router-dom";
import "./projectItem.css";

function ProjectItem({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-link">
      <div className="project">
        <img
          src={project.image}
          alt={project.name}
          className="project-image"
        ></img>
        <div className="project-content">
          <h2 className="project-title">{project.name}</h2>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
