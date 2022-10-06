import React from "react";
import styled from "styled-components";
import {
  Services1,
  Services2,
  Services3,
  Services4,
  Services5,
  Services6,
} from "../../images";
import {mediaQuery} from "../../styles/constants/mediaQuery";
import {Button} from "../ui";
import {ItemServices} from "./ItemServices";

export const Services = () => {

  return (
    <Container id="services">
      <div className="content-items">
        <div className="heading">
        <span className="title">+ SERVICIOS</span>
        <h2 className="subtitle">MÁS SERVICIOS</h2>
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
  background: #292929;
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }
  z-index: 9;

  .content-items {
    padding: 3rem 0;
    .heading{
      //float: left;
      margin-bottom: 60px;
      padding-top: 79px;
      position: relative;
      text-align: center;
      width: 100%;
      .title {
        color: #363636;
        font-size: 147px;
        left: 0;
        line-height: 102px;
        //position: absolute;
        text-align: center;
        //top: 0;
        //transition: all 0.4s ease 0s;
        width: 100%;
      }
      .subtitle{
        //float: left;
        //margin-top: -3rem;
        font-family: 'Intro Demo', sans-serif;
        font-size: 26px;
        color: #fff;
        letter-spacing: 0.3px;
        //margin: 0;
        //position: relative;
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
