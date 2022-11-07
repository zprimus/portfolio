// dependencies
import React from 'react';
import { useRouter } from 'next/router';

// data
import locations from '../../lib/locations';

// components
import BackButton from '../../components/BackButton.js';
import ImgCarousel from '../../components/ImgCarousel.js';

const ExploreTemplate = () => {
    // get project id from url
    const router = useRouter();
    const { id } = router.query;

    // find location data using id
    let index = locations.findIndex(obj => obj.id === id);
    let location = locations[index];

    return(
        <div className="ExploreTemplate">
            <div className="ExploreTemplate-backbutton">
                <BackButton
                    url='/explore'
                />
            </div> 
            <div className="ExploreTemplate-info">
                <h1>{location.info.name}</h1>
                <hr/>
                <h3>General Info</h3>
                <ul>
                    {
                        location.info.general.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))
                    }
                </ul>
                {
                    location.info.imgs.length > 0 &&
                    <div className={"ExploreTemplate-slider"}>
                        <ImgCarousel
                            pics={location.info.imgs}
                        />
                    </div>
                }
                <br/>
                <h3>Details</h3>
                {
                    location.info.desc.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))
                }
                {
                    location.info.resources.length > 0 &&
                    <>
                        <h3>Resources</h3>
                        <ul>
                            {
                                location.info.resources.map((resource, index) => (
                                    <li key={index}>
                                        <>
                                            {resource.text}:&nbsp;
                                            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.link}</a>
                                        </>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                }
            </div>
        </div>
    );
}

export default ExploreTemplate;