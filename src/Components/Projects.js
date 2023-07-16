import React from "react";
import projects from "../Json/Projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="pt-32 mb-20 rounded w-full  md:px-20 md:pt-20" id="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 relative">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
