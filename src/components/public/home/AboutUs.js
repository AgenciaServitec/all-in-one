import React from "react";
import styled from "styled-components";
import { videoAllinOne } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const AboutUs = () => {
  return (
    <Container id="about-us">
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
        <div style={{ paddingBottom: "3rem" }}>
          <VideoBg autoPlay loop muted src={videoAllinOne} type="Video/mp4" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  .wrapper-text {
    background: none repeat scroll 0 0 #1a1a1a;
    .content-text {
      text-align: center;
      width: 100%;
      padding: 4em 2em 0 2em;
      ${mediaQuery.minTablet} {
        padding: 5rem 5rem 2rem 5rem;
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

const VideoBg = styled.video`
  width: 60%;
  height: 60%;
  background: #232a34;
`;
