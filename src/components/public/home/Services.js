import React from "react";
import styled from "styled-components";
import {
  Services1,
  Services2,
  Services3,
  Services4,
  Services5,
  Services6,
} from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { ItemServices } from "./ItemServices";

export const Services = () => {
  return (
    <Container id="services">
      <div className="content-items">
        <div className="heading">
          <h2 className="title">+ SERVICIOS</h2>
          <h5 className="subtitle">MÁS SERVICIOS</h5>
        </div>
        <div className="content-img">
          <ItemServices
            img={Services1}
            title="¿Olvidaste la contraseña de tu PC?"
            content="Trae a nuestro Centro de Servicio Técnico Especialista donde con procesos de fábrica y bajo tu autorización desbloquemos la bios de TU EQUIPO. "
          />
          <ItemServices
            img={Services2}
            title="¿Pantalla Azul?"
            content="En ServiTec-Peru somos especialistas en revisar, diagnosticar y reparar las fallas que los sistemas operativos puedan presentar. En los diferentes modelos de All In One."
          />
          <ItemServices
            img={Services3}
            title="Reparación de Placas"
            content="Realizamos instalación y reparación de motherboards, que es un Servicio Avanzado de equipos con problemas complejos. Somos expertos y tenemos la experiencia suficiente para dar solución a tu equipo."
          />
          <ItemServices
            img={Services4}
            title="¿No da Imagen?"
            content="Cuando se enciende la PC no da imagen en pantalla, al presionar el power enciende el led pero no da video, enciende y carga la Bios, se escucha cuando enciende,etc. En Servitec-Peru somos especialistas en repación de este tipo."
          />
          <ItemServices
            img={Services5}
            title="Pantalla Dañada"
            content="Muchos usuarios piensan que una pantalla dañada o quebrada es el fin del equipo, En Servitec-Peru somos importadores directos de pantallas de todos los tamaños, marcas, modelo."
          />
          <ItemServices
            img={Services6}
            title="¿Tu All in One se Apaga Sola?"
            content="¿Utilizas la Pc y de repente se apaga sola y tarda en encender nuevamente? ¿o se reinicia y resetea el Bios?, Somos Servitec-Peru un Centro de Servicio Técnico Especialista que posse la experiencia suficiente para dejar tu equipo en excenlentes condiciones."
          />
        </div>
        <div className="button">
          <a href="#inicio">
            <Button
              text="¡Empezar Ahora!"
              type="primary"
              // onClick={() => {
              //   onEventGaClickButton(
              //     "click-boton-empezar-ahora",
              //     "Click boton empezar ahora"
              //   );
              // }}
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }
  z-index: 9;

  .content-items {
    padding: 1em 0;
    ${mediaQuery.minTablet} {
      padding: 3em 0;
    }
    .heading {
      margin-bottom: 60px;
      padding-top: 79px;
      position: relative;
      text-align: center;
      width: 100%;
      .title {
        left: 0;
        text-align: center;
        width: 100%;
      }
      .subtitle {
        font-family: "Intro Demo", sans-serif;
        font-size: 26px;
        letter-spacing: 0.3px;
        text-align: center;
        width: 100%;
      }
    }
    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .button {
      padding-top: 1.4rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
