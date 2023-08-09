import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CarouselImg from './CarouselImg';

const Carousel = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {images.map((item, idx) => (
          <CarouselImg img={item} key={idx} />
        ))}
      </SliderContainer>
      {images.length > 1 && (
        <Center>
          <Button onClick={PrevSlide}>Prev</Button>
          <Button onClick={NextSlide}>Next</Button>
        </Center>
      )}
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  width: 600px;
  overflow: hidden;
  @media all and (max-width: 670px) {
    display: none;
  }
`;

const SliderContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 15px;
`;

const Button = styled.div`
  all: unset;
  padding: 12px;
  margin: 0 10px;
  color: #302c2c;
  border-radius: 50px;
  border: 2px solid #36bc9b;
  cursor: pointer;
  &:hover {
    background-color: #36bc9b;
    color: #fff;
  }
`;
