/*
  Creator: Zac Primus
  Project: Portfolio 
  Description: Easy access to past/present projects and little tidbits about my life/passions.
  Hosted: www.zprimus.com
*/

// third party dependencies
import React, { useState } from 'react';

// custom components
import MenuButton from '../components/MenuButton.js';
import Menu from '../components/Menu.js';

// styles
import '../styles/App.css';
import '../styles/BackButton.css';
import '../styles/ClearButton.css';
import '../styles/Explore.css';
import '../styles/ExploreTemplate.css';
import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/HomeBackground.css';
import '../styles/ImgSlider.css';
import '../styles/Map.css';
import '../styles/Menu.css';
import '../styles/MenuButton.css';
import '../styles/PinPopup.css';
import '../styles/Projects.css';
import '../styles/ProjectTemplate.css';
import '../styles/ProjectTile.css';
import '../styles/SocialBar.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const MyApp = ({ Component, pageProps }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleClickMenu = () => {
    toggleMenu();
  }

  return (
    <div className='App'>
      <Component {...pageProps} />
      <div className="App-menubutton">
        <MenuButton
          handleClickMenu={handleClickMenu}
          showMenu={showMenu}
        />
      </div>
      <Menu
        handleClickMenu={handleClickMenu}
        showMenu={showMenu}
      />
    </div>
  )
}

export default MyApp;
