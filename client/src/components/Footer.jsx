import React from "react";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

import linkedin  from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer  className="flex   p-3 justify-center gap-4  bg-slate-900">
      <a href="https://github.com/jasonrouss" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="github "  height="50" width="55"/>
      </a>
     
      <a href=" https://discord.gg/TRsp77VNZN "target="_blank" rel="noopener noreferrer">
      <img src={discord} alt="discord" height="50" width="55" />
      
      </a>
      <a  href=" mailto:jasonrousswork@gmail.com"target="_blank" rel="noopener noreferrer"> 
      <img src={gmail} alt="gmail" height="50" width="55" />
      </a>
      <a  href=" https://www.linkedin.com/in/jason-rouss-7a8129190/" target="_blank" rel="noopener noreferrer"> 
      <img src={linkedin} alt="linkedin" height="50" width="55" />
      </a>
     
     
    </footer>
  );
};

export default Footer;
