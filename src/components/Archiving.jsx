import "./Archiving.css";

import { FaHighlighter, FaCheck } from "react-icons/fa";

//archiving
import gitHub from "../style/images/archiving/git-hub.png";
import notion from "../style/images/archiving/notion.png";
import boardgetto from "../style/images/archiving/boardgetto.png";
import tisStory from "../style/images/archiving/tistory.jpg";

const Archiving = (props) => {
  return (
    <div className="archiving-container">
      <h2
        id={props.NarBarTitle[3]}
        key={props.NarBarTitle[3]}
        className="part-title archiving-hr white-text"
      >
        {props.NarBarTitle[3]}
      </h2>

      <div className="archiving-wrap">
        <ul className="archiving-wrap-ui flex-box center-box">
          <li className="archiving-box git-hub" onClick={() => {}}>
            <a href="https://github.com/SOL-hub">
              <img
                className="archiving-img"
                src={gitHub}
                width="200px"
                alt="git-hub"
              />
              <p className="archiving-link">https://github.com/SOL-hub</p>

              <p className="archiving-box-title">
                <FaHighlighter />
                소스 코드 저장공간
              </p>
              <ul className="left-text">
                <li className="archiving-box-li">
                  <FaCheck />
                  혼자 배운 코딩들 정리용, 연습용 소스 코드
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  프로젝트 팀과 공유용 소스 코드
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  개발 교육 당시 배운 내용정리
                </li>
              </ul>
            </a>
          </li>
          <li className="archiving-box notion" onClick={() => {}}>
            <a href="https://www.notion.so/ef0b5cdec6184d82811c6e659c67d332">
              <img
                className="archiving-img"
                src={notion}
                width="200px"
                alt="notion"
              />
              <p className="archiving-link">https://www.notion.PARK SOL</p>
              <p className="archiving-box-title">
                <FaHighlighter />
                프로그래밍 언어 공부 정리
              </p>
              <ul className="left-text">
                <li className="archiving-box-li">
                  <FaCheck />
                  공부내용들 상세 정리(복습용)
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  개발 시작하며 진행한 프로젝트 코드 기록
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  프로젝트 팀원과 진행한 회의 및 정보 공유
                </li>
              </ul>
            </a>
          </li>
          <li className="archiving-box" onClick={() => {}}>
            <a href="https://mud-lavender-535.notion.site/0715a37989e1426588d19823d4e1f751?v=ef3ea740a4974ce1a21051b00f5f5665">
              <img
                className="archiving-img"
                src={boardgetto}
                width="130px"
                alt=""
              />
              <p className="archiving-link">
                https://blog.naver.com/boardgetddo_team
              </p>

              <p className="archiving-box-title">
                <FaHighlighter />
                '보드살롱' 블로그
              </p>
              <ul className="left-text">
                <li className="archiving-box-li">
                  <FaCheck />
                  서비스 출시 전 관심 유저를 위한 홍보 활동
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  사이드프로젝트/IT관련 업계 사람 관심유도
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  IT관련 정보, 프로젝트의 진행 상황 공유
                </li>
              </ul>
            </a>
          </li>
          <li className="archiving-box">
            <a href="https://thfdl0317.tistory.com/">
              <img
                className="archiving-img"
                src={tisStory}
                width="150px"
                alt=""
              />
              <p className="archiving-link">https://thfdl0317.tistory.com/</p>

              <p className="archiving-box-title">
                <FaHighlighter />
                지식공유, 공부정리 블로그
              </p>
              <ul className="left-text">
                <li className="archiving-box-li">
                  <FaCheck />
                  개발 중 겪는 오류에 대한 해결방법 정리
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  프로젝트를 하며 배운 코드 자료 정리
                </li>
                <li className="archiving-box-li">
                  <FaCheck />
                  개발 시작하면서 배운 웹 관련 지식 공유
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Archiving;
