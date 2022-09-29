// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
//import '../styles/BackButton.css';

const BackButton = (props) => {
    return (
        <Link to={`${props.url}`} style={{ textDecoration: 'none' }}>
            <button className="BackButton">
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <g transform="translate(0 35) rotate(-45)">
                        <rect id="arrow" rx="15"  stroke="#66FCF1" strokeWidth="5"></rect>
                    </g>
                    <g transform="translate(0 35) rotate(0)">
                        <rect id="straight" rx="15"  stroke="#66FCF1" strokeWidth="5"></rect>
                    </g>
                    <g transform="translate(10 35) rotate(45)">
                        <rect id="arrow" rx="15"  stroke="#66FCF1" strokeWidth="5"></rect>
                    </g>
                </svg>
            </button>
        </Link>
    );
  }

export default BackButton;