// dependencies
import React from "react";

// components
import SocialBar from "../components/SocialBar.js";
import HomeBackground from "../components/HomeBackground.js";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-body">
        <h1>{"Hi, my name is Zachary Primus."}</h1>
        <br/>
        <p>
          {"I'm an engineer with a focus in software development."}
        </p>
        <p>
          {"My passions include web, mobile, and game development as well as control systems and networks."}
        </p>
        <p>
          {"Check out my previous experiences!"}
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