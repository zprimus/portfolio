// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/Projects.css';

// components
import ProjectTile from '../components/ProjectTile.js';

// assets
import pic_gd_0 from '../assets/generic-website-pic.png';
import pic_gd_1 from '../assets/generic-website-pic.png';
import pic_gd_2 from '../assets/generic-website-pic.png';
import pic_cac_0 from '../assets/generic-website-pic.png';
import pic_cac_1 from '../assets/generic-website-pic.png';
import pic_cac_2 from '../assets/generic-website-pic.png';
import pic_port_0 from '../assets/generic-website-pic.png';
import pic_port_1 from '../assets/generic-website-pic.png';
import pic_port_2 from '../assets/generic-website-pic.png';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagSelector: "All",
      projects: [
        {
          id: 'gooddeed',
          name: 'GoodDeed',
          short_desc: 'short desc',
          desc: 'desc',
          skills: [],
          link: '',
          pics: [
            pic_gd_0,
            pic_gd_1,
            pic_gd_2
          ],
          pic_desc: 'Pic of GoodDeed app'
        },
        {
          id: 'collect-a-cop',
          name: 'Collect-a-Cop',
          description: '',
          skills: [],
          link: '',
          pics: [
            pic_cac_0,
            pic_cac_1,
            pic_cac_2
          ],
          pic_desc: 'Pic of Collect-a-Cop app'
        },
        {
          id: 'portfolio',
          name: 'Portfolio',
          description: '',
          skills: [],
          link: '',
          pics: [
            pic_port_0,
            pic_port_1,
            pic_port_2
          ],
          pic_desc: 'Pic of Portfolio app'
        }
      ],
      
    }
  }

  tagSelectors = [
    'All',
    'AutoCAD',
    'CSS',
    'Express',
    'FactoryTalk ME',
    'HTML5',
    'Ignition',
    'JavaScript',
    'MongoDB', 
    'MySQL',
    'NodeJS',
    'Python',
    'React',
    'React Native',
    'RSLogix 5000',
    'Visio',
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
        <div>
          <Link 
            to={{
              pathname: `/projects?id=${project.id}`,
              state: project
            }} 
            style={{ textDecoration: 'none' }}
          >
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
          <text>Select a skill that I used for the project.</text>
          <div className = "Projects-tile-container">
              {this.renderProjectTiles()}
          </div>
      </div>
    );
  }
}

export default Projects;