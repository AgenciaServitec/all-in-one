import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  MarcaLenovo,
  MarcaLg,
  MarcaMac,
  MarcaSony,
  MarcaHp,
  MarcaDell,
} from "../../../images";
import styled from "styled-components";

const logoLists = [
  {
    image: MarcaLenovo,
    name: "Lenovo",
  },
  {
    image: MarcaLg,
    name: "Lg",
  },
  {
    image: MarcaMac,
    name: "Mac",
  },
  {
    image: MarcaSony,
    name: "Sonny",
  },
  {
    image: MarcaHp,
    name: "hp",
  },
  {
    image: MarcaDell,
    name: "Dell",
  },
];

export const BrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Container className="slider-container">
      <Slider {...settings} className="slider">
        {logoLists.map((logoList, index) => (
          <div>
            <img src={logoList.image} alt={logoList.name} key={index} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.section`
  .slider {
    /* background: ${({ theme }) => theme.colors.tertiary}; */
    background: ${({ theme }) => theme.colors.primary};
    padding: 1rem 0;
    div {
      display: flex;
      align-items: center;
      img {
        width: 6rem;
      }
    }
  }
`;
