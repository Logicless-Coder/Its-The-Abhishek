import React from "react";
import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <div id="project-item" style={{ backgroundImage: props.image }}>
      <p id="project-title">{props.title}</p>
    </div>
  );
}

export default ProjectItem;
