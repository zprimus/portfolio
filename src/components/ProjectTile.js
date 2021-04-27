// dependencies
import React from 'react';

// styles
import '../styles/ProjectTile.css';

function ProjectTile(props) {
    return(
        <div className="ProjectTile">
            <div className="ProjectTile-header">
                <text>{props.name}</text>
            </div>
            <div className="ProjectTile-thumbnail">
                <div>
                    <img src={props.pic} alt={props.pic_desc}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectTile;