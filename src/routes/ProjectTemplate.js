// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookButton, TwitterButton } from "react-social";
import 'dotenv';

// styles
import '../styles/ProjectTemplate.css';
import styles from '../styles/styles';

// data
import projects from '../data/projects.js';

// assets
import fb_icon from '../assets/icons/fb_icon.svg';
import twitter_icon from '../assets/icons/twitter_icon.svg';

// components
import BackButton from '../components/BackButton.js';
import ImgSlider from '../components/ImgSlider.js';

const ProjectTemplate = () => {
    let url = window.location.href;
    let urlSplit = url.split('projects/');
    let index = projects.findIndex(obj => obj.id === urlSplit[1]);
    let project = projects[index];
    console.log(urlSplit);

    return(
        <div className="ProjectTemplate">
            <div>
                <div className="ProjectTemplate-backbutton">
                    <BackButton
                        url='/projects'
                    />
                </div>
                <div className="ProjectTemplate-title">
                    <h1>{project.name}</h1>
                    <p style={{color: styles.color.color3}}>{project.overview}</p>
                </div>
                {
                    project.link === '' ? 
                    (
                        <div className="ProjectTemplate-links-nolink">
                            <div className="ProjectTemplate-links-share">
                                <FacebookButton id="facebook" url={url} appId={process.env.REACT_APP_FB_KEY}>
                                    <img src={fb_icon} alt="Share to Facebook"/>
                                </FacebookButton>
                                <TwitterButton id="twitter" url={url} appId={process.env.REACT_APP_TWIITER_KEY}>
                                    <img src={twitter_icon} alt="Share to Facebook"/>
                                </TwitterButton>
                            </div>
                        </div>
                    ) : (
                        <div className="ProjectTemplate-links">
                                <div className="ProjectTemplate-links-link">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <button
                                            style={{
                                                backgroundColor: styles.color.color4,
                                                padding: "5px",
                                                borderRadius: "5px",
                                                fontWeight: 'bold'
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
                            pics={project.pics}
                        />
                    </div>
                </section>
                <section>
                    <br/>
                    <br/>
                    <h2>Project Description</h2>
                    <hr/>
                    {
                        project.desc.map((desc, index) => (
                            <p key={index} style={{color: styles.color.color3}}>{desc}</p>
                        ))
                    }
                </section>
                <section>
                    <h2>Technical Sheet</h2>
                    <p>Technologies and skills that I used for the project.</p>
                    <hr/>
                    <ul>
                        {
                            project.skills.map(skill => (
                                <li key={skill} style={{color: styles.color.color3}}>{skill}</li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h2>Resources</h2>
                    <hr/>
                    <ul>
                        { 
                            project.resources.length !== 0 ?
                            (
                                project.resources.map(resource => (
                                    <li key={resource} style={{color: styles.color.color3}}>{resource.text} <a href={resource.link} style={{ textDecoration: 'none' }}>{resource.link}</a></li>
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

export default ProjectTemplate;