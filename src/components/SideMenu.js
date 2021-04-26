// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/SideMenu.css';

// assets
import fb_icon from "../assets/fb_icon.png";
import github_icon from "../assets/github_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";

function SideMenu() {
    return (
      <nav class="Sidemenu">
        <div class="SideMenu-header">
          SideMenu Header
        </div>
        <div class="SideMenu-routes">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h3 class="SideMenu-link">Home</h3>
          </Link>
          <Link to ="/travel" style={{ textDecoration: 'none' }}>
            <h3 class="SideMenu-link">Travel</h3>
          </Link>
          <Link to ="/experience" style={{ textDecoration: 'none' }}>
            <h3 class="SideMenu-link">Experience</h3>
          </Link>
          <Link to ="/biography" style={{ textDecoration: 'none' }}>
            <h3 class="SideMenu-link">Biography</h3>
          </Link>
          <Link to ="/apps" style={{ textDecoration: 'none' }}>
            <h3 class="SideMenu-link">Apps</h3>
          </Link>
        </div>
        <div class="SideMenu-footer">
          <div class="SideMenu-icon">
            <a href="https://www.facebook.com/zachary.primus">
              <img src={fb_icon} width="50px" height="50px" alt="Link to Facebook"/>
            </a>
          </div>
          <div class="SideMenu-icon">
            <a href="https://github.com/zprimus">
              <img src={github_icon} width="50px" height="50px" alt="Link to Github"/>
            </a>
          </div>
          <div class="SideMenu-icon">
            <a href="https://www.linkedin.com/in/zacprimus/">
              <img src={linkedin_icon} width="50px" height="50px" alt="Link to LinkedIn"/>
            </a>
          </div>
        </div>
      </nav>
    );
  }

export default SideMenu;