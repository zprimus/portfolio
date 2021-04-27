// dependencies
import React from 'react';

// styles
import '../styles/SocialBar.css';

// assets
import fb_icon from "../assets/fb_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import ig_icon from "../assets/ig_icon.png";
import github_icon from "../assets/github_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";

function SocialBar() {
    return (
        <div className="SocialBar">
                <div className="SocialBar-item" id="facebook">
                    <a href="https://www.facebook.com/zachary.primus/">
                        <img src={fb_icon} height="50px" width="50px" alt="Link to facebook"/>
                    </a>
                </div>
                <div className="SocialBar-item" id="twitter">
                    <a href="https://twitter.com/ZacPrimus">
                        <img src={twitter_icon} height="50px" width="50px" alt="Link to twitter"/>
                    </a>
                </div>
                <div className="SocialBar-item" id="instagram">
                    <a href="https://www.instagram.com/zacprimus/">
                        <img src={ig_icon} height="50px" width="50px" alt="Link to instagram"/>
                    </a>
                </div>
                <div className="SocialBar-item" id="linkedin">
                    <a href="https://www.linkedin.com/in/zacprimus/">
                        <img src={linkedin_icon} height="50px" width="50px" alt="Link to linkedin"/>
                    </a>
                </div>
                <div>
                    </div>
                <div className="SocialBar-item" id="github">
                    <a href="https://github.com/zprimus">
                        <img src={github_icon} height="50px" width="50px" alt="Link to github"/>
                    </a>
                </div>
        </div>
    );
  }

export default SocialBar;