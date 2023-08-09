import HeartBeat from "../components/HeartBeat";
import Contact from "../components/Contact";
import "./AboutSol.css";


import {
  FaUserAlt,
  FaSubway,
  FaBirthdayCake,
  FaPhoneAlt,
  FaRegPaperPlane,
} from "react-icons/fa";

import parksol from "../style/images/parksol-profile.png";

const AboutSol = ({ NarBarTitle, contactOpen, contactClose }) => {
  return (
    <div id={NarBarTitle[0]} className="about-sol-container">
      <h2
        id={NarBarTitle}
        key={NarBarTitle}
        className="part-title about-sol-hr"
      >
        {NarBarTitle[0]}
      </h2>
      <ul className="about-sol-list-wrap grid-box center-box">
        <li className="about-sol-li">
          <img
            className="profile-img"
            src={parksol}
            width="40%"
            alt="parksol"
          />
          <HeartBeat />
        </li>
        <li className="about-sol-li">
          <p className="about-sol-box white-text">
            <FaUserAlt className="icons" /> NAME
          </p>
          <p>박솔</p>
        </li>
        <li className="about-sol-li">
          <p className="about-sol-box white-text">
            <FaSubway className="icons" /> ADDRESS{" "}
          </p>
          <p className="detail-mini-text">(근처 지하철)</p>
          <span className="subway-wrap">역곡역</span>
        </li>
        <li className="about-sol-li">
          <p className="about-sol-box white-text">
            <FaBirthdayCake className="icons" /> BIRTH
          </p>
          <p>94.03.17</p>
        </li>
        <li className="about-sol-li">
          <p className="about-sol-box white-text">
            <FaPhoneAlt className="icons" /> TEL
          </p>
          <p>010-5276-1281</p>
        </li>
        <li className="about-sol-li" onClick={contactClose}>
          <p className="about-sol-box white-text" title="이메일을 보낼 수 있는 모달창이 나옵니다.">
            <FaRegPaperPlane className="icons" /> E-MAIL
          </p>
          <p>thfdl0317@naver.com</p>
        </li>
        {contactOpen && <Contact contactClose={contactClose}></Contact>}
      </ul>
    </div>
  );
};

export default AboutSol;


