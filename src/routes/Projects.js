// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/Projects.css';

// components
import ProjectTile from '../components/ProjectTile.js';

// data
import projects from '../data/projects.js';
import tags from '../data/tags.js';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagSelector: "All",
    }
  }

  handleSelectorChange = (selector) => {
    this.setState({tagSelector: selector})
  }

  renderSelectors() {
    return(
      tags.map((selector) => (
        selector === this.state.tagSelector ? (
          <button key={selector} className="Projects-selector-button" id="selected" onMouseDown={() => this.handleSelectorChange(selector)}>{selector}</button>
        ) : (
          <button key={selector} className="Projects-selector-button" id="not_selected" onMouseDown={() => this.handleSelectorChange(selector)}>{selector}</button>
        )
      ))
    )
  }

  renderProjectTiles() {
    let filteredProjects;
    this.state.tagSelector==='All' ?
    filteredProjects = projects :
    filteredProjects = projects.filter(project => project.skills.find(tag => tag===this.state.tagSelector));

    return(
      filteredProjects.map((project) => (
          <div key={project.id}>
            <Link to={{ pathname: `/projects?id=${project.id}`}}>
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

  render() {
    return (
      <div className = "Projects">
          <div className = "Projects-header">
            <h2>My finished projects are here. Check them out!</h2>
          </div>
          <div className = "Projects-selector-container">
              {this.renderSelectors()}
          </div>
          
          <p>Select a skill that I used for the project.</p>
          <hr/>
          <div className = "Projects-tile-container">
              {this.renderProjectTiles()}
          </div>
      </div>
    );
  }
}

export default Projects;