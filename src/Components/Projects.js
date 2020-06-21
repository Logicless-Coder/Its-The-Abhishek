import React, { Component } from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";

// IMAGES
import pgs from "../Images/pgs.PNG";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Password Generator",
          live_demo_link:
            "https://logicless-coder.github.io/Password-Generator/",
          github_repo_link:
            "https://github.com/Logicless-Coder/Password-Generator",
          image: pgs,
          brief: "A strong random password generator.",
        },
        // {
        //   title: "Weather App",
        //   live_demo_link: "",
        //   github_repo_link: "",
        //   image: "",
        //   brief: "",
        // },
        // {
        //   title: "Movie App",
        //   live_demo_link: "",
        //   github_repo_link: "",
        //   image: "",
        //   brief: "",
        // },
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
              <ProjectItem
                title={project.title}
                image={project.image}
                brief={project.brief}
                live_demo_link={project.live_demo_link}
                github_repo_link={project.github_repo_link}
              />
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
