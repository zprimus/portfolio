// dependencies
import React from 'react';
import Image from 'next/image';

const HomeBackground = () => {
    return(
        <div className="HomeBackground">
            <Image src={"/ink/ink4.svg"} layout='fill' className="ink2" id="ink4-1"/>
            <Image src={"/ink/ink4.svg"} layout='fill' className="ink3" id="ink4-2"/>
            <Image src={"/ink/ink4.svg"} layout='fill' className="ink4" id="ink4-3"/>
        </div>
    );
  }

export default HomeBackground;