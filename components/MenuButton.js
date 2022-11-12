// dependencies
import React from 'react';

const MenuButton = ({showMenu, handleClickMenu}) => {
    return (
        <div 
            className="MenuButton" 
        >
            <svg 
                viewBox="0 -13 100 100" 
                width="50" 
                height="40" 
                onMouseUp={() => handleClickMenu()}
            >
                <rect 
                    className={showMenu ? "closeMenu" : "openMenu"}
                    id="MenuButton-line1" 
                    rx="15" 
                    fill="transparent"
                    stroke="#EB6440"
                    strokeWidth="5"
                ></rect>
                <rect 
                    className={showMenu ? "closeMenu" : "openMenu"}
                    id="MenuButton-line2" 
                    rx="15" 
                    y="30" 
                    fill="transparent"
                    stroke="#EB6440"
                    strokeWidth="5"
                ></rect>
                <rect 
                    className={showMenu ? "closeMenu" : "openMenu"}
                    id="MenuButton-line3" 
                    rx="15" 
                    y="60" 
                    fill="transparent"
                    stroke="#EB6440"
                    strokeWidth="5"
                ></rect>
            </svg>
        </div>
    );
  }

export default MenuButton;