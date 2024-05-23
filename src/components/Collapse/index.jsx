import { useState } from "react";
import "./collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, skills }) {
  const [collapseOpen, setCollapseOpen] = useState(false);

  function handleClick() {
    setCollapseOpen(!collapseOpen);
  }

  return (
    <div className="one-collapse" key={title}>
      <button type="button" className="collapse-btn" onClick={handleClick}>
        {title}
        <FontAwesomeIcon
          className={`arrow ${collapseOpen ? "rotate" : ""}`}
          icon={faArrowsRotate}
        />
      </button>
      <div className={`collapse-content ${collapseOpen ? "open" : ""}`}>
        <ul>
          {skills.map((s) => {
            return (
              <p key={s}>
                <FontAwesomeIcon icon={faToggleOn} className="check-icon" />
                {s}
              </p>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Collapse;
