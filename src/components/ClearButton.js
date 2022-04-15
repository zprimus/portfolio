// dependencies
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// styles
import '../styles/ClearButton.css';

const ClearButton = (props) => {
    return (
        props.hasInfo &&
        <Link to={`${props.url}`} style={{ textDecoration: 'none' }} onClick={() => props.handleClick()}>
            <button className="ClearButton">
                <svg viewBox="0 0 100 80" width="40" height="40" transform="rotate(90)">
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

export default ClearButton;