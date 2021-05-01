// dependencies
import React from 'react';

// styles
import '../styles/MenuButton.css';

function MenuButton(props) {
    return (
        props.showMenu ? (
            <button className="MenuButton" onMouseDown={() => props.handleClickMenu()}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <g transform="translate(10 70) rotate(-45)">
                        <rect id="MenuButton-line1" rx="15"  stroke="#66FCF1" strokeWidth="5"></rect>
                    </g>
                    <g transform="translate(20 0) rotate(45)">
                        <rect id="MenuButton-line1" rx="15"  stroke="#66FCF1" strokeWidth="5"></rect>
                    </g>
                </svg>
            </button>
        ) : (
            <button className="MenuButton" onMouseDown={() => props.handleClickMenu()}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect id="MenuButton-line1" rx="15" stroke="#66FCF1" strokeWidth="5"></rect>
                    <rect id="MenuButton-line1" rx="15" y="30" stroke="#66FCF1" strokeWidth="5"></rect>
                    <rect id="MenuButton-line1" rx="15" y="60" stroke="#66FCF1" strokeWidth="5"></rect>
                </svg>
            </button>
        )
    );
  }

export default MenuButton;