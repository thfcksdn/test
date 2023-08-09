import boardGetto1 from './style/images/project/side-project/boardgetto1.png';
import boardGetto2 from './style/images/project/side-project/boardgetto2.png';
import boardGetto3 from './style/images/project/side-project/boardgetto3.png';

const PROJECT_DATA = [
  {
    id: 0,
    title: '보드살롱 보드게임중고거래 사이트',
    miniTitle: '2022년08월(사이드 프로젝트)',
    images: [boardGetto1, boardGetto2, boardGetto3],
    content1:
      '현업에 종사하는 기획자, 디자이너, 마케팅, 개발자들이 모여진행한 MVP 서비스 보드게임 중고거래 플랫폼입니다.',
    content2:
      '프론트엔드는 React와 Typescript, 백엔드는 SpringBoot를 사용하였으며 정기적인 회의를 통해 협업할 때의 알아야할 지식, 정보등을 공유하며 진행하였습니다.',
    coreFunction: '검색/필터/구매문의 등',
    frontSkills: 'React, TypeScript, 버전관리(Git)',
    backSkills: 'SpringBoot, JPA, Java, MySQL',
    // blog: '보드살롱 블로그',
    // website: '보드살롱',
    // blogUrl: 'https://www.notion.so/0715a37989e1426588d19823d4e1f751?v=ef3ea740a4974ce1a21051b00f5f5665',
    websiteUrl:
      'https://mud-lavender-535.notion.site/0715a37989e1426588d19823d4e1f751?v=ef3ea740a4974ce1a21051b00f5f5665',
  },
  {
    id: 1,
    title: 'SOL-Protfolio 사이트',
    miniTitle: '2022년10월(1인 개인프로젝트)',
    images: ['https://ifh.cc/g/F6V2pW.png'],
    content1:
      '지금 보시는 웹사이트가 해당 사이트이며 React에 배웠던 것을 활용하며 레이아웃을 작업, Sass과 Styled-components를 사용하면서 기존 CSS작업을 넘어 다양한 프론트엔드 개발을 더 깊숙히 경험할 수 있었던 프로젝트입니다.',
    content2: '',
    coreFunction: '보유기술, 프로젝트, 활동site 등 소개',
    frontSkills: 'React, CSS, HTML, 스타일컴포넌트',
    backSkills: '백엔드 사용X, 버전관리(Git)',
    // blog: '',
    // website: '',
    // blogUrl: '',
    websiteUrl: 'https://sol2sole.github.io/',
  },
  {
    id: 2,
    title: '채용공고 사이트',
    miniTitle: '2022년04월 (주)빅픽처팀 - 프로젝트',
    images: ['https://ifh.cc/g/KjfNOg.png'],
    content1:
      '빅픽처팀에 지원하는 유저들이 조회, 신청할 수 있고 관리자는 채용내용을 등록, 삭제, 수정, 조회할 수 있는 채용공고 사이트입니다, 백엔드 포지션으로 활동하였습니다.',
    content2:
      'PostMan을 사용하며 RestAPI의 규칙을 더 자세히 구현할 수 있었으며 관리자화면일 경우, 사용자화면일 경우에 따라 보여져야하는 데이터들을 구별, 스크럼미팅을 통해 팀원들과 많은 의사소통, 코드리뷰로 다른 식으로 구현할 수 있는 방법을 알 수 있었던 프로젝트였습니다.',
    coreFunction: 'CRUD, 관리자, 신청자의 조회UI 등',
    frontSkills: 'React, Typescript, 버전관리(Git)',
    backSkills: 'SpringBoot, Java, MYSQL',
    // blog: '',
    // website: '',
    // blogUrl: '',
    websiteUrl: '',
  },
  {
    id: 3,
    title: 'DGIS',
    miniTitle: '2021년07월 (주)소프트엔 - 프로젝트',
    images: ['https://ifh.cc/g/bomoCZ.jpg'],
    content1:
      '통신서비스를 설치한 곳의 시설현황, 가공거리, 간선망 등을 검색, 조회하는 웹 사이트입니다.',
    content2:
      '각 UI마다의 기능들을 모듈화하는 방식, mybatis의 sql을 가져와 수정, 조회하며 MVC패턴의 흐름을 실무에서 파악할 수 있었고 ajax인 비동기적 통신방식으로 새로 로딩없이 원하는 데이터만 보여줄 수 있게 구현, 각 목차별 UI들의 레이아웃을 JQuery와 CSS로 구현하며 웹 서비스에 주요 기능들을 구성하는 문법들을 배울 수 있었던 경험이었습니다.',
    coreFunction: '검색/조회/수정 등',
    frontSkills: 'JQUERY, HTML, CSS',
    backSkills: 'SpringMVC, Java, MYSQL',
    // blog: 'DGIS',
    // website: '',
    // blogUrl: '',
    websiteUrl: 'https://www.notion.so/08d0dfa469264a0a8d884279d47c007d#ebb433901d9f42c3b45e3d4179b51f43',
  },
  {
    id: 4,
    title: '사기꾼 잡는 변호사',
    miniTitle: '2021년 06월 (주)소프트엔 - 프로젝트',
    images: ['https://ifh.cc/g/CtoWRk.png'],
    content1:
      '상담을 웹, 앱으로 간편하게 진행 할 수 있는 변호사 상담 사이트입니다.',
    content2:
      'ERD설계와 UI기획 기획서를 작업하며 유저들에게 편리한 기능을 제공하는 것이 우선으로 개발되기 위한 수정작업을 클라이언트와 상의, MVP패턴으로 개발, 상담신청부터 상담조회까지 CRUD 기능을 구현과 JQUERY와 Css를 활용해 전체 레이아웃 작업하며 프로젝트 진행, 개발 시 주의해야할 점 등을 알게된 프로젝트였습니다.',
    coreFunction: '관리자 승인/거절, 상담진행/조회',
    frontSkills: 'JQuery, HTML, CSS',
    backSkills: 'SpringMVC, Java, HeidiSQL',
    websiteUrl: 'https://www.notion.so/08d0dfa469264a0a8d884279d47c007d#87cee8f971d249969517551f66ce2400',
  },
  {
    id: 5,
    title: 'Oherp!',
    miniTitle: '2020년08월(5인 개인프로젝트)',
    images: ['https://ifh.cc/g/lnT2tH.png'],
    content1:
      '인사관리를 위한 통합 솔루션을 주제로, 사원들의 근태관리, 출퇴근, 휴가, 급여 등의 관리와 커뮤니티, 기록형 웹 사이트를 만들었습니다.',
    content2:
      'Spring에 필요한 설정파일, 라이브러리 등록하는 것에 시간이 많이 소요되었지만 프레임워크의 사용방법과 이클립스와 다른 DB연결 방법 등으로 spring의 장점을 알아갈 수 있었으며, 실제 웹 화면과 유사한 기능을 제이쿼리로 구현하려면 어떻게 해야하는지에 대해 검색하며 익숙해지며 페이지 상황에 맞는 SQL를 구상하며 진행한 프로젝트였습니다.',
    coreFunction: '사원등록/근태관리/게시판 등',
    frontSkills: 'JQuery, HTML, CSS',
    backSkills: 'SpringMVC, Java, DBeaver',
    websiteUrl: '',
  },
  {
    id: 6,
    title: 'houudoin!',
    miniTitle: '2020년07월 (6인 개인프로젝트)',
    images: ['https://ifh.cc/g/Vs2J8K.png'],
    content1:
      '일반적인 가구 판매를 넘어 우리집의 인테리어 견적을 믿고 맡길 수 있는 토탈 인테리어 솔루션을 제공하는 사이트',
    content2:
      '필터의 기능을 이용해 사용자가 원하는 제품만 볼 수 있도록, 회원가입자 한에서 선착순으로 댓글 입력 시 포인트 적립 기능 구현, DAO에 JDBC를 등록해 DB에 CRUD 구현과 Servlet을 통해 서버에서 동작하는 JSP구성등을 개발하며 홈페이지 흐름도를 정확히 인지할 수 있었던 팀프로젝트였습니다.',
    coreFunction: '필터/구매/포인트 적립 등',
    frontSkills: 'JavaScript, JQuery, HTML, CSS',
    backSkills: 'Eclipse, Java, DBeaver',
    websiteUrl: 'http://www.sysout.co.kr/houudoin',
  },
];

export default PROJECT_DATA;
