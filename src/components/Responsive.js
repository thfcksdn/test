import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//project
import boardGetto from "../style/images/project/side-project/boardgetto.png";

const Responsive = () => {
  return (
    <>
      <Carousel infiniteLoop>
        <div className="carousel-1">
          <img src={boardGetto} alt="boardgetto" />
        </div>
        <div className="carousel-2">2</div>
        <div className="carousel-3">3</div>
      </Carousel>
    </>
  );
};

export default Responsive;
