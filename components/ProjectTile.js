// dependencies
import React from 'react';
import Image from 'next/image'

const ProjectTile = (props) => {
    return(
        <>
            <div className="ProjectTile-header">
                <h5>{props.name}</h5>
            </div>
            <div className="ProjectTile-thumbnail">
                <Image 
                    src={props.pics[0].pic} 
                    alt={props.pics[0].alt}
                    layout="fill"
                />
            </div>
        </>
    );
}

export default ProjectTile;