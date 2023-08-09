import React from 'react';
import styled from 'styled-components';

export default function CarouselImg({ img }) {
  return <IMG src={img} alt="carousel img" />;
}

const IMG = styled.img`
  width: 600px;
  height: 400px;
`;
