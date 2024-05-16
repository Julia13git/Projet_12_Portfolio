import { useState } from "react";
import "./collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

// import { projectList } from "../../datas/projectList";

function Collapse({ title, skills }) {
  const [collapseOpen, setCollapseOpen] = useState(true);

  function handleClick(event) {
    setCollapseOpen(!collapseOpen);
    const contentid = event.target.getAttribute("contentid");
    if (collapseOpen) {
      event.target.classList.remove("rotate-up");
      event.target.classList.add("rotate-down");
      document
        .getElementById(contentid)
        .classList.remove("hide-collapse-content");
      document.getElementById(contentid).classList.add("show-collapse-content");
    } else {
      event.target.classList.remove("rotate-down");
      event.target.classList.add("rotate-up");
      document
        .getElementById(contentid)
        .classList.remove("show-collapse-content");
      document.getElementById(contentid).classList.add("hide-collapse-content");
    }
  }

  return (
    <div className="one-collapse" key={title}>
      <button type="button" className="collapse-btn">
        {title}
        <img
          contentid={title}
          src="/images/arrow-collapse-up.svg"
          alt=""
          onClick={handleClick}
        />
      </button>
      <div className="collapse-content hide-collapse-content" id={title}>
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
