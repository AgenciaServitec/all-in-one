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

export const AboutUs = () => {
  return (
    <Container id="about-us">
      <div className="wrapper-marcas">
        <ul className="list-marcas">
          <div className="item-marca">
            <li>
              <a>
                <img src={MarcaSony} />
              </a>
            </li>
          </div>
          <div className="item-marca">
            <li>
              <a>
                <img src={MarcaHp} />
              </a>
            </li>
          </div>
          <div className="item-marca">
            <li>
              <a>
                <img src={MarcaDell} />
              </a>
            </li>
          </div>
          <div className="item-marca">
            <li>
              <a>
                <img src={MarcaLg} />
              </a>
            </li>
          </div>
          <div className="item-marca">
            <li>
              <a>
                <img src={MarcaMac} />
              </a>
            </li>
          </div>
          <div className="item-marca">
            <li>
              <a>
                <img src={MarcaLenovo} />
              </a>
            </li>
          </div>
        </ul>
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
  .wrapper-marcas {
    margin: 0px auto;
    padding: 1rem 3rem;
    .list-marcas {
      display: flex;
      align-items: center;
      list-style: none;
      .item-marca {
        width: 288px;
        margin-right: 50px;
        img {
          width: 9rem;
        }
      }
    }
  }
  .wrapper-text {
    background: none repeat scroll 0 0 #1a1a1a;
    .content-text {
      text-align: center;
      width: 100%;
      padding: 5rem 5rem;
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
