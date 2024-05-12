import "./projectItem.css";

function ProjectItem({ title, image, description, github_lien }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image"></img>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        {/* <p className="project-link">{github_lien}</p> */}
      </div>
    </div>
  );
}

export default ProjectItem;
