// dependencies
import React from 'react';

// styles
import '../styles/HomeBackground.css';

// assets
import {ReactComponent as Ink1} from '../assets/ink/ink1.svg';
import {ReactComponent as Ink2} from '../assets/ink/ink2.svg';
import {ReactComponent as Ink3} from '../assets/ink/ink3.svg';
import {ReactComponent as Ink4} from '../assets/ink/ink4.svg';

function HomeBackground() {
    return(
        <div className="HomeBackground">
            <Ink1 className="ink1" id="ink1-1"/>
            {/*
            <Ink1 className="ink1" id="ink1-2"/>
            <Ink2 className="ink2" id="ink2-1"/>
            <Ink2 className="ink2" id="ink2-2"/>
            <Ink3 className="ink3" id="ink3-1"/>
            <Ink3 className="ink3" id="ink3-2"/>
            <Ink4 className="ink4" id="ink1-1"/>
            <Ink4 className="ink4" id="ink2-1"/>
            */}
        </div>
    );
  }

export default HomeBackground;