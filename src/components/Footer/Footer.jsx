import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <div><a href="mailto:jitendramahali253@gmail.com">jitendramahali253@gmail.com</a> | +91 9556959414</div>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer">
            <LinkedIn color="white" size={"1.5rem"} />
          </a>
          <a href="https://github.com/your_github_profile" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"1.5rem"} />
          </a>
          <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"1.5rem"} />
          </a>
          <a href="https://www.facebook.com/your_facebook_profile" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"1.5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
