// dependencies
import React from 'react';
import Link from 'next/link';

const BackButton = (props) => {
    return (
        <Link href={`${props.url}`} style={{ textDecoration: 'none' }}>
            <div className="BackButton">
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <g transform="translate(0 35) rotate(-45)">
                        <rect 
                            id="arrow1" 
                            rx="15"  
                            fill="#EB6440"
                            stroke="#EB6440"
                            strokeWidth="5"
                        ></rect>
                    </g>
                    <g transform="translate(0 35) rotate(0)">
                        <rect 
                            id="straight" 
                            rx="15"  
                            fill="#EB6440"
                            stroke="#EB6440"
                            strokeWidth="5"
                        ></rect>
                    </g>
                    <g transform="translate(10 35) rotate(45)">
                        <rect 
                            id="arrow2" 
                            rx="15"  
                            fill="#EB6440"
                            stroke="#EB6440"
                            strokeWidth="5"
                        ></rect>
                    </g>
                </svg>
            </div>
        </Link>
    );
  }

export default BackButton;