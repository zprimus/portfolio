// dependencies
import React, { useState } from 'react';
import Link from 'next/link';

// components
import ProjectTile from '../../components/ProjectTile.js';

// data
import projects from '../../lib/data/projects.js';
import skills from '../../lib/data/skills.js';

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
          <div key={index} className="Projects-tile">
            <Link href={`/projects/${project.id}`} style={{textDecoration: 'none'}}>
              <ProjectTile
                name={project.name}
                pics={project.pics}
                pic_desc={project.pic_desc}
              />
            </Link>
          </div>
      ))
    )
  }

  return (
    <div className="Projects">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="Projects-header">
        <h2>My finished projects are here. Check them out!</h2>
      </div>
      <br/>
      <div className="Projects-selector-container">
        {renderSelectors()}
      </div>
      <br/>
      <p>Select a skill that I used for the project.</p>
      <hr/>
      <br/>
      <div className="Projects-tile-container">
        {renderProjectTiles()}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Projects;