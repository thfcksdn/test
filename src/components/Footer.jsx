import "./Footer.css";

import { FaGithub, FaFacebook, FaCopyright } from "react-icons/fa";

import tiStoryLogo from "../style/images/tistoryLogo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sns-wrap flex-box center-box">
        <ul className="sns-icon-ui flex-box">
          <li className="footer-icon-wrap" onClick={() => {}}>
            <a href="https://github.com/SOL-hub">
              <FaGithub className="footer-icons white-text" />
            </a>
          </li>
          <li className="footer-icon-wrap" onClick={() => {}}>
            <a href="https://thfdl0317.tistory.com/">
              <img src={tiStoryLogo} width="96" height="96" alt="tistoryLogo" />
            </a>
          </li>
          <li className="footer-icon-wrap" onClick={() => {}}>
            <a href="https://www.facebook.com/profile.php?id=100003807183258">
              <FaFacebook className="footer-icons white-text" />
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright-text">
        <FaCopyright className="copyright-text white-text" /> 2022. SOL PARK.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
