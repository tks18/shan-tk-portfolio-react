 import React from "react";
 import Project from "./Project"
 import {ProjectsList} from "../constants"
  /***********************
    Projects Component
   ***********************/
  
  const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              {ProjectsList.overview}
            </p>
          </div>
          <div className="projects-wrapper">
          {ProjectsList.projectList.map((project) => {
            return <Project
              title={project.title}
              img={project.image}
              tech={project.icon}
              link={project.link}
              repo={project.repo}
            >
              <small>{project.shortdesc}</small>
              <p>{project.longdesc}</p>
            </Project>
          })}
          <h5>Since its the Initial Commit of this Website - Complete List of All Projects will be Added in the Future</h5>
          </div>
        </div>
      </section>
    );
  };
 
export default Projects;