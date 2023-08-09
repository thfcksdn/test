import './Intruduce.css';

const Intruduce = () => {
  return (
    <div className="intruduce-oneself-container flex-box center-box">
      <h1 className="main-name">박 솔</h1>
      <p className="intruduce-title portfolio-hr">SOL's 포토폴리오</p>
      <p className="mini-title">
        안녕하십니까
        <br />
        퍼블리싱/프론트엔드로 활동하고있는 박솔이라고합니다.
      </p>
      <br />
      <a
        onClick={() => {}}
        className="recruit-button-wrap white-text"
        href="https://www.notion.so/ef0b5cdec6184d82811c6e659c67d332"
        title="클릭하면 노션에 정리한 상세 이력서를 보실 수 있습니다!"
      >
        이력서는 여기 클릭
      </a>
    </div>
  );
};

export default Intruduce;
