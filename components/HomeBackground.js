// dependencies
import React from 'react';
import Image from 'next/image';

const HomeBackground = () => {
    return(
        <div className="HomeBackground">
            <img src={"/ink/ink4.svg"} alt='' layout='fill' className="ink2" id="ink4-1"/>
            <img src={"/ink/ink4.svg"} alt='' layout='fill' className="ink3" id="ink4-2"/>
            <img src={"/ink/ink4.svg"} alt='' layout='fill' className="ink4" id="ink4-3"/>
        </div>
    );
  }

export default HomeBackground;