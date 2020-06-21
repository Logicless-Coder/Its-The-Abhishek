import React from "react";
import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <div id="project-item">
      <p id="project-title">{props.title}</p>
      <img id="project-image" alt={props.title} src={props.image} />
      <p id="project-brief">{props.brief}</p>
      <button
        className="project-button"
        id="project-live-demo"
        href={props.live_demo_link}
      >
        Live Demo
      </button>
      <button
        className="project-button"
        id="project-github-repo"
        href={props.github_repo_link}
      >
        Source Code
      </button>
    </div>
  );
}

export default ProjectItem;
