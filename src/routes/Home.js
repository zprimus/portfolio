// dependencies
import React from 'react';

// styles
import '../styles/Home.css';

// components
import SocialBar from '../components/SocialBar.js';
import HomeBackground from '../components/HomeBackground.js';


function Home() {
  return (
    <div className="Home">
      <div className="Home-body">
        <h1>Hi, my name is Zachary Primus.</h1>
        <p>
          I'm an Electrical Engineer with a passion for Hardware Design and Software Development.
        </p>
        <p>
          Check out my experiences!
        </p>
      </div>
      <div className="Home-social">
        <SocialBar/>
      </div>
      <div className="Home-background">
        <HomeBackground/>
      </div>
    </div>
  );
}

export default Home;