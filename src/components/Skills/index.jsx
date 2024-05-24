import "./skills.css";

function Skills({ skills }) {
  return (
    <div className="skills">
      <h1 className="skills-title">Mes Compétences</h1>
      <div className="skills-content">
        {skills.map((skills, index) => {
          return (
            <div key={index} className="logo-skill">
              <img src={skills.logo} alt={skills.name} className="logo" />
              <p>{skills.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
