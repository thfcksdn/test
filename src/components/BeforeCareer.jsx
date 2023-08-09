import "./BeforeCareer.css";

import { FcBusiness, FcVoicePresentation } from "react-icons/fc";

const BeforeCareer = (props) => {
  return (
    <div id={props.NarBarTitle[5]} className="before-career-container">
      <h2 id="NarBarTitle" className="part-title before-career-hr">
        {props.NarBarTitle[5]}
      </h2>

      <div className="before-career-wrap flex-box center-box">
        <div className="content-left-wrap">
          <p className="career-title left-text">
            이전 경력 <FcBusiness />
          </p>
          <div className="career-list-box">
            <p className="career-title">빅픽처팀</p>
            <ul className="left-text">
              <li className="before-career-li">
                - 근무기간 : 2022년 04월~ 07월 (4개월)
              </li>
              <li className="before-career-li">
                - 자사 홈페이지의 채용공고 개발, ERD 작업
              </li>
            </ul>
            <br />
            <p className="career-title">㈜ 소프트엔 - 개발본부</p>

            <ul className="left-text">
              <li className="before-career-li">
                - 근무기간 : 2020년 11월~2021년 11월 (1년)
              </li>
              <li className="before-career-li">
                {" "}
                - 프로젝트 개발, UI상세설계서 작업, 일본어번역 등
              </li>
            </ul>
            <br />

            <p className="career-title">인피니티 - 영업부</p>

            <ul className="left-text">
              <li className="before-career-li">
                - 근무기간 : 2018년 05월~2019년 10월 (1년반)
              </li>
              <li className="before-career-li">
                - 업무내용 : 일본회사와 거래 및 견적상담, 번역, 수주 및 발주관리
              </li>
            </ul>
          </div>
        </div>
        <div className="content-right-wrap">
          <p className="career-title left-text">
            <FcVoicePresentation /> 이전 활동
          </p>
          <div className="career-list-box">
            <ul className="left-text">
              <li className="career-title">
                일본 유학 교환학생 & 워킹홀리데이 (약 2년)
              </li>
              <li className="before-career-li">
                - 한국어 강사(나고야), 리조또 파견사원(오사카 및 아와지시마)
              </li>
              <li className="before-career-li">
                - 국제 문화교류센터 통역 및 중,고등학교 한국 소개활동 등(시코쿠
                마쯔야마)
              </li>
            </ul>

            <br />

            <p className="career-title left-text">
              <em className="fas fa-user-graduate fa-1x"></em> 평택대학교
              광고홍보학과 졸업
            </p>
            <ul className="left-text">
              <li className="before-career-li">
                - 재학기간 : 2013년 3월 ~ 2018년 8월
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeCareer;
