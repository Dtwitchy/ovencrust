// frontend/src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';  // Adjust the path according to your project structure
import gitIcon from '../../assets/git.png';  // Adjust the path according to your project structure

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <img className="logo" src={logo} alt="OvenCrust Logo" />
          <p>We are the best in delivering freshly baked cakes and pastries.</p>
          <div className="footerSocialIcons">
            <a href="https://github.com/Dtwitchy/ovencrust">
              <img src={gitIcon} alt="GitHub" />
              <br />
              <small>Source Code</small>
            </a>
          </div>
        </div>
        <div className="footerContentCentre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footerContentRight">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>09015069742</li>
            <li>
              <a href="mailto:ovencrust@gmail.com">
                ovencrust@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyRight">
        &copy; OvenCrust {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;