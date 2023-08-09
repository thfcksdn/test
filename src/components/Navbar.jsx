import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { links } from "../links";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showNav) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showNav]);
  return (
    <nav className="navBar-container flex-box">
      <div
        className="nav-header flex-box"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <button className="header-nav-big-title" title="클릭하면 최상위치로 돌아옵니다."><a href="#">SOL's Portfolio</a></button>
      </div>

      <button className="navbar-toogleButton" onClick={toggleLinks}>
        <i className={showNav ? "fas fa-times" : "fas fa-bars"} />
      </button>

      <div
        className="links-container flex-box center-box"
        ref={linksContainerRef}
      >
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, text } = link;
            return (
              <li
                key={id}
                mode="main"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById(text).offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <p onClick={() => {}} className="narBar-li"><a href="#">{text}</a></p>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
