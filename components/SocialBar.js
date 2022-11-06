// dependencies
import React from 'react';
import Image from 'next/image';

const SocialBar = () => {
    return (
        <div className="SocialBar">
            <div className="SocialBar-item" id="facebook">
                <a href="https://www.facebook.com/zachary.primus/">
                    <Image src={"/icons/fb_icon.svg"} height="40px" width="40px" alt="Link to facebook"/>
                </a>
            </div>
            <div className="SocialBar-item" id="twitter">
                <a href="https://twitter.com/ZacPrimus">
                    <Image src={"/icons/twitter_icon.svg"} height="40px" width="40px" alt="Link to twitter"/>
                </a>
            </div>
            <div className="SocialBar-item" id="instagram">
                <a href="https://www.instagram.com/zacprimus/">
                    <Image src={"/icons/ig_icon.svg"} height="40px" width="40px" alt="Link to instagram"/>
                </a>
            </div>
            <div className="SocialBar-item" id="linkedin">
                <a href="https://www.linkedin.com/in/zacprimus/">
                    <Image src={"/icons/linkedin_icon.svg"} height="35px" width="35px" alt="Link to linkedin"/>
                </a>
            </div>
            <div className="SocialBar-item" id="github">
                <a href="https://github.com/zprimus">
                    <Image src={"/icons/github_icon.svg"} height="50px" width="50px" alt="Link to github"/>
                </a>
            </div>
        </div>
    );
  }

export default SocialBar;