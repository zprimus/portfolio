// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/ProjectTemplate.css';

// data
import projects from '../data/projects.js';

// assets
import fb_icon from '../assets/icons/fb_icon.svg';
import twitter_icon from '../assets/icons/twitter_icon.svg';

// components
import BackButton from '../components/BackButton.js';
import ImgSlider from '../components/ImgSlider.js';

function handleClickBack() {
    
}

class ProjectTemplate extends React.Component {
    constructor() {
        super();
        
        this.state = {
            imageSelector: 0,
        }
    }

    params = new URLSearchParams(document.location.search.substring(1));
    id = this.params.get("id");
    project = projects.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(this.id)));
    project = this.project[0]

    handleImageSelector = (pos) => {
        this.setState({imageSelector: pos})
    }

    render() {
        return(
            <div className="ProjectTemplate">
                <div>
                    <div className="ProjectTemplate-backbutton">
                        <BackButton
                            handleClick={handleClickBack}
                            url='/projects'
                        />
                    </div>
                    <div className="ProjectTemplate-title">
                        <h1>{this.project.name}</h1>
                        <p>{this.project.overview}</p>
                    </div>
                    {
                        this.project.link === '' ? 
                        (
                            <div className="ProjectTemplate-links-nolink">
                                <div className="ProjectTemplate-links-share">
                                    <button id="facebook">
                                        <img src={fb_icon} alt="Share to Facebook"/>
                                    </button>
                                    <button id="twitter">
                                        <img src={twitter_icon} alt="Share to Facebook"/>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="ProjectTemplate-links">
                                    <div className="ProjectTemplate-links-link">
                                        <Link to="/" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                                            <button
                                                style={{
                                                    backgroundColor: "#66FCF1",
                                                    padding: "5px",
                                                    borderRadius: "5px"
                                                }}
                                            >
                                                Go to Project!
                                            </button>
                                        </Link>
                                    </div>
                                
                                <div className="ProjectTemplate-links-share">
                                    <button id="facebook">
                                        <img src={fb_icon} alt="Share to Facebook"/>
                                    </button>
                                    <button id="twitter">
                                        <img src={twitter_icon} alt="Share to Facebook"/>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <section>
                        <div>
                            <ImgSlider
                                pics={this.project.pics}
                                imageSelector={this.state.imageSelector}
                                handleImageSelector={this.handleImageSelector}
                            />
                        </div>
                    </section>
                    <section>
                        <h2>Project Description</h2>
                        <hr/>
                        <p>{this.project.desc1}</p>
                        <p>{this.project.desc2}</p>
                    </section>
                    <section>
                        <h2>Technical Sheet</h2>
                        <p>Technologies and skills that I used for the project.</p>
                        <hr/>
                        <ul>
                            {
                                this.project.skills.map(skill => (
                                    <li key={skill}>{skill}</li>
                                ))
                            }
                        </ul>
                    </section>
                    <section>
                        <h2>Resources</h2>
                        <hr/>
                        <ul>
                            { 
                                this.project.resources.length !== 0 ?
                                (
                                    this.project.resources.map(resource => (
                                        <li key={resource}>{resource.text} <a href={resource.link} style={{ textDecoration: 'none' }}>{resource.link}</a></li>
                                    ))
                                ) : (
                                    <li>N/A</li>
                                )
                            }
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default ProjectTemplate;