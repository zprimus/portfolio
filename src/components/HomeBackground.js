// dependencies
import React from 'react';

// styles
import '../styles/HomeBackground.css';

// assets
import {ReactComponent as Ink4} from '../assets/ink/ink4.svg';

function HomeBackground() {
    return(
        <div className="HomeBackground">
            <Ink4 className="ink2" id="ink4-1"/>
            <Ink4 className="ink3" id="ink4-2"/>
            <Ink4 className="ink4" id="ink4-3"/>
        </div>
    );
  }

export default HomeBackground;