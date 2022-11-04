import React from "react";
import styled from "styled-components";
import {
  MarcaLenovo,
  MarcaLg,
  MarcaMac,
  MarcaSony,
  MarcaHp,
  MarcaDell,
} from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import AntCarousel from "antd/lib/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDevice } from "../../../hooks";

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

export const AboutUs = () => {
  const { isMobile } = useDevice();
  return (
    <Container id="about-us">
      <div className="wrapper-logos-mobile">
        <AntCarousel
          autoplay
          autoplaySpeed={5 * 1000}
          arrows={!isMobile}
          prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
          nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
        >
          {logoLists.map((logoList, index) => (
            <div className="wrapper-logo-mobile" key={index}>
              <img src={logoList.image} alt={logoList.name} />
            </div>
          ))}
        </AntCarousel>
      </div>
      <div className="wrapper-text">
        <div className="content-text">
          <h2 className="title">¿QUE ES UNA ALL IN ONE?</h2>
          <p className="content">
            Las computadoras All in One o todos en Uso son aquellos que tienen
            integrados todos los componentes base para su funcionamiento, como y
            fundamentalmente la pantalla, procesador memoria, discos, etc, en
            una sola carcasa que se integra también con la pantalla y esta es la
            principal diferencia con respecto a las computadoras de sobremesa.
            Requiriendo su cuidado para repotenciar el equipo pudiendo dañar la
            pantalla si no es un tco.especialista.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  .wrapper-logos-mobile {
    padding: 1.5rem 2rem;
    .wrapper-logo-mobile {
      max-width: 13em;
      width: 100%;
      padding: 2em 0 3.5em 0;

      img {
        width: 100%;
      }
    }
  }
  .wrapper-text {
    background: none repeat scroll 0 0 #1a1a1a;
    .content-text {
      text-align: center;
      width: 100%;
      padding: 4em 2em;
      ${mediaQuery.minTablet} {
        padding: 5rem 5rem;
      }
      .title {
        letter-spacing: 0.3px;
        font-family: "Intro Demo", sans-serif;
        width: 100%;
      }
      .content {
        line-height: 1.3em;
        margin-bottom: 2em;
        margin-top: 1em;
      }
    }
  }
`;
