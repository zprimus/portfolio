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
                    src={props.pics[0]?.pic} 
                    alt={props.pics[0]?.alt}
                    layout="fill"
                    priority
                />
                <div className='ProjectTile-thumbnail-dropdown'>
                    <Image
                        src={props.pics[1]?.pic}
                        alt={props.pics[1]?.alt}
                        layout="fill"
                        style={{
                            filter: 'brightness(0.7)'
                        }}
                    />
                    <div  className='ProjectTile-thumbnail-dropdown-skills'>
                        <div id='skills'>
                            {
                                props.skills.map((skill, index) => (
                                    <button
                                        key={index}
                                        className='skill'
                                    >
                                        {skill}
                                    </button>
                                ))
                            }
                        </div>
                        {
                            true &&
                            <button 
                                className='skill'
                            >
                                more...
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectTile;