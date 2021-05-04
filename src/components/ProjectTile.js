// dependencies
import React from 'react';

// styles
import '../styles/ProjectTile.css';

function ProjectTile(props) {
    return(
        <div className="ProjectTile">
            <div className="ProjectTile-header">
                <div>{props.name}</div>
            </div>
            <div className="ProjectTile-thumbnail">
                <img src={props.pics[0].pic} alt={props.pics[0].alt}/>
            </div>
        </div>
    );
}

export default ProjectTile;