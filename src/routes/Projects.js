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

// assets

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagSelector: "All",
    }
  }

  handleSelectorChange = (selector) => {
    this.setState({tagSelector: selector})

    console.log(this.state.tagSelector)
  }

  renderSelectors() {
    return(
      tags.map((selector) => (
        selector === this.state.tagSelector ? (
          <button key={selector} style={{backgroundColor: 'black', color: 'white'}} className="Projects-selector-button" onMouseDown={() => this.handleSelectorChange(selector)}>{selector}</button>
        ) : (
          <button key={selector} className="Projects-selector-button" onMouseDown={() => this.handleSelectorChange(selector)}>{selector}</button>
        )
      ))
    )
  }

  renderProjectTiles() {
    return(
      projects.map((project) => (
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
            <h4>My finished projects are here. Check them out!</h4>
          </div>
          <div className = "Projects-selector-container">
              {this.renderSelectors()}
          </div>
          <p>Select a skill that I used for the project.</p>
          <div className = "Projects-tile-container">
              {this.renderProjectTiles()}
          </div>
      </div>
    );
  }
}

export default Projects;