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
            <h2>
                {project.name}
            </h2>
            <p>{project.short_desc}</p>
        </div>
    );
}

export default ProjectTemplate;