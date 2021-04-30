// dependencies
import React from 'react';

// styles
import '../styles/ProjectTemplate.css';

// data
import projects from '../data/projects.js';

function ProjectTemplate() {
    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get("id");
    let project = projects.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(id)));
    project = project[0]

    return(
        <div className="ProjectTemplate">
            <header>
                <div className="ProjectTemplate-title">
                    <h1>{project.name}</h1>
                    <p>{project.overview}</p>
                </div>
                <div className="ProjectTemplate-links">
                    <div className="ProjectTemplate-links-link">
                        <button>{project.link === '' ? 'No Link Active' : 'Go to Project!'}</button>
                    </div>
                    <div className="ProjectTemplate-links-share">
                        <button>fb</button>
                        <button>tweet</button>
                    </div>
                </div>
            </header>
            <body>
                <section>
                    <img
                        src={project.pics[0]}
                        alt={project.pic_desc}
                    />
                </section>
                <section>
                    <h2>Project Description</h2>
                    <hr/>
                    <p>{project.desc1}</p>
                    <p>{project.desc2}</p>
                </section>
                <section>
                    <h2>Technical Sheet</h2>
                    <p>Technologies and skills that I used for the project.</p>
                    <hr/>
                    <ul>
                        {
                            project.skills.map(skill => (
                                <li>{skill}</li>
                            ))
                        }
                    </ul>
                </section>
            </body>
            <footer>
            </footer>
        </div>
    );
}

export default ProjectTemplate;