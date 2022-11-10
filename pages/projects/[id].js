// dependencies
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FacebookButton, TwitterButton } from "react-social";
import Image from 'next/image';

// data
import projects from '../../lib/projects.js';

// components
import BackButton from '../../components/BackButton.js';
import ImgCarousel from '../../components/ImgCarousel.js';

const ProjectTemplate = ({host}) => {
    // get project id from url
    const router = useRouter();
    const { id } = router.query;

    // find project data using id
    let index = projects.findIndex(obj => obj.id === id);
    let project = projects[index];

    // get current url
    let url = host + router.asPath;

    return(
        <div className="ProjectTemplate">
            <div>
                <div className="ProjectTemplate-backbutton">
                    <BackButton
                        url='/projects'
                    />
                </div>
                <div className="ProjectTemplate-title">
                    <h1>{project.name}</h1>
                    <p>{project.overview}</p>
                </div>
                {
                    project.link === '' ? 
                    (
                        <div className="ProjectTemplate-links-nolink">
                            <div className="ProjectTemplate-links-share">
                                <FacebookButton id="facebook" url={url} appId={process.env.FB_KEY}>
                                    <Image src={'/icons/fb_icon.svg'} alt="Share to Facebook" width='50px' height='50px'/>
                                </FacebookButton>
                                <TwitterButton id="twitter" url={url} appId={process.env.TWIITER_KEY}>
                                    <Image src={'/icons/twitter_icon.svg'} alt="Share to Facebook" width='50px' height='50px'/>
                                </TwitterButton>
                            </div>
                        </div>
                    ) : (
                        <div className="ProjectTemplate-links">
                                <div className="ProjectTemplate-links-link">
                                    <Link href="/" style={{ textDecoration: 'none' }}>
                                        <button
                                            style={{
                                                padding: "5px",
                                                borderRadius: "5px",
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Go to Project!
                                        </button>
                                    </Link>
                                </div>
                            
                            <div className="ProjectTemplate-links-share">
                                <button id="facebook">
                                    <Image src={'/icons/fb_icon.svg'} alt="Share to Facebook" width='50px' height='50px'/>
                                </button>
                                <button id="twitter">
                                    <Image src={'/icons/twitter_icon.svg'} alt="Share to Facebook" width='50px' height='50px'/>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <section>
                    <div>
                        <ImgCarousel
                            pics={project.pics}
                        />
                    </div>
                </section>
                <section>
                    <h2>Project Description</h2>
                    <hr/>
                    {
                        project.desc.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))
                    }
                </section>
                <section>
                    <h2>Technical Sheet</h2>
                    <p>Technologies and skills that I used for the project.</p>
                    <hr/>
                    <ul>
                        {
                            project.skills.map(skill => (
                                <li key={skill} style={{}}>{skill}</li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h2>Resources</h2>
                    <hr/>
                    <ul>
                        { 
                            project.resources.length !== 0 ?
                            (
                                project.resources.map((resource, index) => (
                                    <li key={index}>{resource.text} <a href={resource.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>{resource.link}</a></li>
                                ))
                            ) : (
                                <li>N/A</li>
                            )
                        }
                    </ul>
                </section>
            </div>
        </div>
    );
}

export const getServerSideProps = async (context) => (
    { 
        props: { 
            host: context.req.headers.host || null 
        } 
    }
);

export default ProjectTemplate;