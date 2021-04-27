// dependencies
import React from 'react';

// styles
import '../styles/Projects.css';

// components
import ProjectTile from '../components/ProjectTile.js';

// assets
import pic_gd from "../assets/generic-website-pic.png";
import pic_cac from "../assets/generic-website-pic.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagSelector: "All",
      projects: [
        {
          id: 'gooddeed',
          name: 'GoodDeed',
          description: '',
          skills: [],
          link: '',
          pic: pic_gd,
          pic_desc: 'Pic of GoodDeed app'
        },
        {
          id: 'collect-a-cop',
          name: 'Collect-a-Cop',
          description: '',
          skills: [],
          link: '',
          pic: pic_cac,
          pic_desc: 'Pic of Collect-a-Cop app'
        },
        {
          id: 'portfolio',
          name: 'Portfolio',
          description: '',
          skills: [],
          link: '',
          pic: pic_cac,
          pic_desc: 'Pic of Portfolio app'
        }
      ],
      
    }
  }

  tagSelectors = [
    'All', 
    'React', 
    'MongoDB', 
    'MySQL'
  ];

  handleSelectorChange = (selector) => {
    this.setState({tagSelector: selector})

    console.log(this.state.tagSelector)
  }

  renderSelectors() {
    return(
      this.tagSelectors.map((selector) => (
        selector === this.state.tagSelector ? (
          <button style={{backgroundColor: 'black', color: 'white'}} className="Projects-selector-button" onMouseDown={() => this.handleSelectorChange(selector)}>{selector}</button>
        ) : (
          <button className="Projects-selector-button" onMouseDown={() => this.handleSelectorChange(selector)}>{selector}</button>
        )
      ))
    )
  }

  renderProjectTiles() {
    return(
      this.state.projects.map((project) => (
        <ProjectTile
          name={project.name}
          pic={project.pic}
          pic_desc={project.pic_desc}
        />
      ))
    )
  }

  render() {
    return (
      <div className = "Projects">
          <div className = "Projects-header">
            <text>My finished projects are here. Check them out!</text>
            <h4>Select a skill that I used for the project.</h4>
          </div>
          <div className = "Projects-selector-container">
              {this.renderSelectors()}
          </div>
          <div className = "Projects-tile-container">
              {this.renderProjectTiles()}
          </div>
      </div>
    );
  }
    
}

export default Projects;