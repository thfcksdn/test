import "./Skills.css";

import { FaGithub, FaSlack, FaFigma } from "react-icons/fa";

// < skills >
// backend
import eclipse from "../style/images/skills/BackEnd/01.eclipse.png";
import spring from "../style/images/skills/BackEnd/02.spring.png";
import dBeaver from "../style/images/skills/BackEnd/03.dBeaver.png";
import heidiSQL from "../style/images/skills/BackEnd/04.heidiSQL.png";
import springBoots from "../style/images/skills/BackEnd/05.Spring-boot.png";
import mySQL from "../style/images/skills/BackEnd/06.mySQL.png";
import Firebase from "../style/images/skills/BackEnd/07.firebase.jpg";
import mongoBD from "../style/images/skills/BackEnd/08.mongoDB.png";

//frontend
import html from "../style/images/skills/FrontEnd/01.html.png";
import css from "../style/images/skills/FrontEnd/02.css.png";
import jsEs6 from "../style/images/skills/FrontEnd/03.JS-ES6.png";
// import typescript from "../style/images/skills/FrontEnd/04.typescript.png";
import react from "../style/images/skills/FrontEnd/05.React.png";
// import redux from "../style/images/skills/FrontEnd/06.Redux.png";
import sass from "../style/images/skills/FrontEnd/07.sass.png";
import jquery from "../style/images/skills/FrontEnd/08.jquery.png";
import bootstrap from "../style/images/skills/FrontEnd/bootstrap.png";
import vue from "../style/images/skills/FrontEnd/vue.png";
import zeplin from "../style/images/skills/FrontEnd/zeplin.png";

//Version
import svn from "../style/images/skills/Version/svn.png";
import git from "../style/images/skills/Version/Git.png";

//Communication
// import erdCloud from "../style/images/skills/Communication/Erdcloud.png";

const Skills = (props) => {
  return (
    <div id={props.NarBarTitle[1]} className="skills-container">
      <h2
        id={props.NarBarTitle}
        key={props.NarBarTitle}
        className="part-title skills-hr"
      >
        {props.NarBarTitle[1]}
      </h2>
    
     {/* <!-- front-end --> */}
      <div className="frontend-container flex-box center-box">
        <ul className="skill-part-wrap-frontend flex-box">
          <li className="skill-part-name">Back-end</li>
          <li className="frontend">Front-end</li>
          <li className="skill-part-name">Version Control</li>
          <li className="skill-part-name">Communication</li>
        </ul>

        <ul className="frontend-wrap-ui grid-box">
          <li className="skills-item">
            <p className="skills-title">HTML</p>
            <img src={html} alt="html-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">CSS</p>
            <img src={css} alt="css-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">JS ES6</p>
            <img
              className="es6-box"
              src={jsEs6}
              width="100px"
              alt="JS-ES6-logo"
            />
          </li>
          {/* <li className="skills-item">
            <p className="skills-title">TypeScript</p>
            <img src={typescript} alt="typescript-logo" />
          </li> */}
          <li className="skills-item">
            <p className="skills-title">Bootstrap</p>
            <img src={bootstrap} width="100px" alt="Bootstrap-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">REACT</p>
            <img src={react} width="85px" alt="React-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Vue</p>
            <img src={vue} width="90px" alt="vue-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">SASS</p>
            <img src={sass} alt="sass-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">JQUERY</p>
            <img src={jquery} alt="jquery-logo" />
          </li>
        </ul>
      </div>
      {/* <!--front-container end --> */}

      <div className="backend-container flex-box center-box">
        <ul className="skill-part-wrap-backend flex-box">
          <li className="backend">Back-end</li>
          <li className="skill-part-name">Front-end</li>
          <li className="skill-part-name">Version Control</li>
          <li className="skill-part-name">Communication</li>
        </ul>
        <ul className="backend-wrap-ui grid-box">
          <li className="skills-item">
            <p className="skills-title">Eclipse</p>
            <img src={eclipse} alt="Eclipse-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Spring</p>
            <img src={spring} alt="spring-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">DBeaver</p>
            <img src={dBeaver} alt="dBeaver-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">HeidiSQL</p>
            <img src={heidiSQL} alt="heidiSQL-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Spring boot</p>
            <img src={springBoots} width="85px" alt="spring-boot-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">MySQL</p>
            <img src={mySQL} width="85px" alt="mySQL-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Firebase</p>
            <img src={Firebase} width="85px" alt="Firebase" />
          </li>
          <li className="skills-item">
            <p className="skills-title">mongoBD</p>
            <img src={mongoBD} width="85px" alt="mongoBD" />
          </li>
        </ul>
      </div>
      {/* <!--back-container END--> */}

     

      {/* <!-- Version Control start --> */}

      <div className="version-control-container flex-box center-box">
        <ul className="skill-part-wrap-version flex-box">
          <li className="skill-part-name">Back-end</li>
          <li className="skill-part-name">Front-end</li>
          <li className="version-control">Version Control</li>
          <li className="skill-part-name">Communication</li>
        </ul>

        {/* <ul className="version-control-wrap-ui grid-box">
          <li className="skills-item">
            <p className="skills-title">GitHub</p>
            <FaGithub className="icons" />
          </li>
          <li className="skills-item">
            <p className="skills-title">SVN</p>
            <img src={svn} width="90px" alt="svn-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Git</p>
            <img src={git} width="90px" alt="git-logo" />
          </li>
        </ul> */}
        <ul className="communication-wrap-ui grid-box">
          <li className="skills-item">
            <p className="skills-title">GitHub</p>
            <FaGithub className="icons" />
          </li>
          <li className="skills-item">
            <p className="skills-title">SVN</p>
            <img src={svn} width="90px" alt="Erdcloud-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Git</p>
            <img src={git} width="90px" alt="git-logo" />
          </li>
        </ul>
      </div>
      {/* <!--Version Control end--> */}

      {/* <!-- Communication --> */}

      <div className="communication-container flex-box center-box">
        <ul className="skill-part-wrap-communication flex-box">
          <li className="skill-part-name">Back-end</li>
          <li className="skill-part-name">Front-end</li>
          <li className="skill-part-name">Version Control</li>
          <li className="communication">Communication</li>
        </ul>

        <ul className="communication-wrap-ui grid-box">
          <li className="skills-item">
            <p className="skills-title">slack</p>
            <FaSlack className="icons" />
          </li>
          <li className="skills-item">
            <p className="skills-title">Zeplin</p>
            <img src={zeplin} width="90px" alt="zeplin-logo" />
          </li>
          <li className="skills-item">
            <p className="skills-title">figma</p>
            <FaFigma className="icons" />
          </li>
        </ul>
      </div>
      {/* <!-- Communication end --> */}
    </div>
  );
};

export default Skills;
