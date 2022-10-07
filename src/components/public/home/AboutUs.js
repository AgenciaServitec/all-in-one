import React from "react";
import styled from "styled-components";
import {
  MarcaLenovo,
  MarcaLg,
  MarcaMac,
  MarcaSony,
  MarcaToshiba,
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
                <img src={MarcaToshiba} />
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
          <h2 className="title">¿QUIÉNES SOMOS?</h2>
          <p className="content">
            Somos una empresa que brinda servicios informáticos de forma
            integral en la asesoría y consultoría en hardware y software, tanto
            para usuarios domésticos, negocios y empresas corporativas.
            Prestamos nuestros servicios en forma altamente personalizada,
            comprendiendo que cada empresa es única, creando una solución a la
            medida de tus necesidades. Logrando identificar y entender las
            necesidades de nuestros clientes para ofrecerle la mejor solución.
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
    padding: 0 3rem;
    .list-marcas {
      display: flex;
      align-items: center;
      list-style: none;
      .item-marca {
        width: 288px;
        margin-right: 50px;
        img {
          width: 10rem;
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
