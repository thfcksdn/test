import './ProgrammingExperience.css';

import { FcCloseUpMode, FcSearch } from 'react-icons/fc';
const ProgrammingExperience = (props) => {
  return (
    <div id={props.NarBarTitle[4]} className="programming-experience-container">
      <h2 id="NarBarTitle" className="part-title programming-hr">
        {props.NarBarTitle[4]}
      </h2>

      <div className="programming-experience-wrap flex-box center-box">
        <div className="programming-education-box">
          <h3>프로그래밍교육</h3>
          <ul className="programming-education-wrap-ui left-text">
            <li>
              <FcCloseUpMode /> 교육기관 : Fast campus
            </li>
            <li>
              <FcCloseUpMode /> 교육기간 : 22.08~
            </li>
            <li>
              <FcCloseUpMode />
              교육내용
            </li>
            <li className="experience-li">- REACT, TypeScript, fireBase</li>
            <li className="experience-li">- HTML/CSS, JAVASCRIPT ES6</li>
          </ul>

          <ul className="programming-education-wrap-ui left-text">
            <li>
              <FcCloseUpMode /> 교육기관 : 코딩애플 온라인강좌
            </li>
            <li>
              <FcCloseUpMode /> 교육기간 : 21.09.25~22.09.25
            </li>
            <li>
              <FcCloseUpMode />
              교육내용
            </li>
            <li className="experience-li">
              - REACT, TypeScript, JAVASCRIPT ES6, node.js, mongoDB, Vue{' '}
            </li>
            <li className="experience-li">- HTML/CSS, JAVASCRIPT, JQUERY </li>
          </ul>

          <ul className="programming-education-wrap-ui left-text">
            <li>
              <FcCloseUpMode /> 교육기관 : KH정보교육원(당산점)
            </li>
            <li>
              <FcCloseUpMode /> 교육기간 : 20.04.16~20.09.23
            </li>
            <li>
              <FcCloseUpMode /> 교육과목 : 디바이스&웹 콘텐츠 융합 디지털
              컨버전스 양성과정(2)
            </li>
            <li>
              <FcCloseUpMode />
              교육내용
              <ul className="left-text">
                <li className="experience-li">
                  - ORACLE SQL Programming, DB 기본부터 활용까지
                </li>
                <li className="experience-li">
                  - JAVA/ Servlet / JSP, jdbc/Spring Framework, Mybatis, Ajax
                </li>
                <li className="experience-li">
                  - HTML / CSS / JavaScript/JQuery
                </li>
                <li className="experience-li">
                  - 세미, 파이널팀 프로젝트 MVP패턴으로 진행
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="team-project-self-study-box">
          <h3>팀프로젝트 & 개인적 개발공부목록(최신 기록)</h3>

          {/* <ul className="team-project-self-study-wrap-ui left-text">
            <li>
              <FcCloseUpMode /> 팀프로젝트 : 사이드프로젝트(보드게임 중고거래
              플랫폼)
            </li>
            <li className="ex">
              - 프론트엔드 REACT + typescript 개발
            </li>
            <li className="experience-li">
              - Spring Boot와 JPA, Spring Security
            </li>
          </ul>

          <ul className="left-text">
            <li>
              <FcCloseUpMode />
               현재 공부하고 있는 프로그래밍 언어들
            </li>
            <li className="experience-li">
              - 프론트엔드 스터디에 참여하여 클론코딩 참여 중<br/>
             (팀원들과 진행 중인 목표 : 구현하고자하는 웹사이트 클론코딩하기)</li>
              <li>프로그래밍과 JavaScript ES6+ 강의(인프런) 
            </li>
            <li className="experience-li">
              - 패스트캠퍼스 강의를 통해 실무에 사용하는 리액트, 타입스크립트 연마중
            </li>
          </ul> */}

          <ul className="programming-education-wrap-ui left-text">
            <li className="experience-li">
              <FcCloseUpMode /> 팀프로젝트 : 사이드프로젝트(보드게임 중고거래)
            </li>
            <li>- 프론트엔드 :  REACT + typescript (팀원 코드리뷰)</li>
          </ul>

          <ul className="programming-education-wrap-ui left-text">
            <li className="experience-li">
              <FcCloseUpMode /> 현재 공부하고 있는 프로그래밍 언어들
            </li>
            <li className="experience-li">
              - 프론트엔드 스터디에 참여하여 클론코딩 참여 중
            </li>
            <li className="experience-li">
               (팀원들과 진행 중인 목표 : 구현하고자하는 웹사이트 클론코딩하기)
            </li>
            <li className="experience-li">
              - 프로그래밍과 JavaScript ES6+ 강의
            </li>
            <li className="experience-li">
              - 패스트캠퍼스 강의를 통해 실무에 사용하는 리액트, 타입스크립트
              연마중
            </li>
            <li className="experience-li">
              <a href='https://github.com/SOL-hub/Project_with_React_SOL' className='react-git-link'><FcSearch/>(본인 깃허브에 기록 여기 클릭)</a>
            </li>
          </ul>

          
        </div>
      </div>
    </div>
  );
};

export default ProgrammingExperience;
