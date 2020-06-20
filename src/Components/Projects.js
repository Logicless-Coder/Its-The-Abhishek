import React, { Component } from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Password Generator",
          live_demo_link: "",
          github_repo_link: "",
          image: "/Images/pgs.png",
          brief: "",
        },
        {
          title: "Weather App",
          live_demo_link: "",
          github_repo_link: "",
          image: "",
          brief: "",
        },
        {
          title: "Movie App",
          live_demo_link: "",
          github_repo_link: "",
          image: "",
          brief: "",
        },
      ],
    };
  }

  render() {
    return (
      <div id="projects">
        <header id="title">My Projects</header>
        <p id="subtitle">
          These are some cool projects made by me. You can view the actual
          source code and take a look at the interactive live demo. Enjoy!
        </p>
        <div id="project-grid">
          {this.state.projects.map((project, index) => (
            <div className="project-item">
              <ProjectItem title={project.title} image={project.image} />
            </div>
          ))}
          {/* <div className="project-item">
            <ProjectItem />
          </div>
          <div className="project-item">
            <ProjectItem />
          </div>
          <div className="project-item">
            <ProjectItem />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Projects;
