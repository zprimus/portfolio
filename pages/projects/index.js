// dependencies
import React, { useState } from 'react';
import Link from 'next/link';

// components
import ProjectTile from '../../components/ProjectTile.js';

// data
import projects from '../../lib/projects.js';
import skills from '../../lib/skills.js';

const Projects = () => {
  const [skillSelector, setSkillSelector] = useState("All");

  const handleSelectorChange = (selector) => {
    setSkillSelector(selector);
  }

  const renderSelectors = () => {
    return(
      skills.map((selector, index) => (
        selector === skillSelector ? (
          <button 
            key={index} 
            className="Projects-selector-button" 
            id="selected" 
            onMouseDown={() => handleSelectorChange(selector)}
          >
              {selector}
          </button>
        ) : (
          <button
            key={index} 
            className="Projects-selector-button" 
            id="not_selected" 
            onMouseDown={() => handleSelectorChange(selector)}
          >
            {selector}
          </button>
        )
      ))
    )
  }

  const renderProjectTiles = () => {
    let filteredProjects;
    skillSelector==='All' ?
      (
        filteredProjects = projects
      ) : (
        filteredProjects = projects.filter(project => project.skills.find(skill => skill===skillSelector))
      )
    
    return(
      filteredProjects.map((project, index) => (
        <Link href={`/projects/${project.id}`} key={index}>
          <div className="Projects-tile">
            <ProjectTile
              name={project.name}
              pics={project.pics}
              skills={project.skills}
            />
          </div>
        </Link>
      ))
    )
  }

  return (
    <div className="Projects">
      <div className="Projects-header">
        <h2>My finished projects are here. Check them out!</h2>
      </div>
      <p>Select a skill that I used for the project.</p>
      <br/>
      <div className="Projects-selector-container">
        {renderSelectors()}
      </div>
      <br/>
      <hr/>
      <br/>
      <div className="Projects-tile-container">
        {renderProjectTiles()}
      </div>
    </div>
  );
}

export default Projects;