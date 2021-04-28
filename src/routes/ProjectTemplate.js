import React from 'react';

import '../styles/ProjectTemplate.css';

function ProjectTemplate(props) {
    let project = props.location.state;

    return(
        <div className="ProjectTemplate">
            <h2>
                {project.name}
            </h2>
            <text>{project.short_desc}</text>
            
        </div>
    );
}

export default ProjectTemplate;