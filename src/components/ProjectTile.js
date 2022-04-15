// dependencies
import React from 'react';

// styles
import '../styles/ProjectTile.css';

function ProjectTile(props) {
    return(
        <>
            <div className="ProjectTile-header">
                <h4>{props.name}</h4>
            </div>
            <div className="ProjectTile-thumbnail">
                <img src={props.pics[0].pic} alt={props.pics[0].alt}/>
            </div>
        </>
    );
}

export default ProjectTile;