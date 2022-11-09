// dependencies
import React from 'react';

const MenuButton = ({showMenu, handleClickMenu}) => {
    return (
        <div 
            className="MenuButton" 
            onMouseUp={() => handleClickMenu()}
        >
            <svg 
                viewBox="0 0 100 80" 
                width="40" 
                height="40"
            >
                <rect 
                    className={showMenu ? "closeMenu" : "openMenu"}
                    id="MenuButton-line1" 
                    rx="15" 
                    stroke="#66FCF1" 
                    strokeWidth="5"
                ></rect>
                <rect 
                    className={showMenu ? "closeMenu" : "openMenu"}
                    id="MenuButton-line2" 
                    rx="15" 
                    y="30" 
                    stroke="#66FCF1" 
                    strokeWidth="5"
                ></rect>
                <rect 
                    className={showMenu ? "closeMenu" : "openMenu"}
                    id="MenuButton-line3" 
                    rx="15" 
                    y="60" 
                    stroke="#66FCF1" 
                    strokeWidth="5"
                ></rect>
            </svg>
        </div>
    );
  }

export default MenuButton;