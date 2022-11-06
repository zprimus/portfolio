// dependencies
import React from 'react';
import Image from 'next/image'

const ProjectTile = (props) => {
    return(
        <>
            <div className="ProjectTile-header">
                <h4>{props.name}</h4>
            </div>
            <div className="ProjectTile-thumbnail">
                <Image 
                    src={props.pics[0].pic} 
                    alt={props.pics[0].alt}
                    title=""
                    width="100%" 
                    height="100%" 
                    layout="fill"
                />
            </div>
        </>
    );
}

export default ProjectTile;