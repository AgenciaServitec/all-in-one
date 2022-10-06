import React from "react";
import styled from "styled-components";
import { ImgAbout } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, FormContact} from "../ui";
import { UniverseBackground } from '../../images';

export const AboutUs = () => {
  return (
    <Container id="inicio" bgImage={UniverseBackground}>
      <div className="content-items">
        <div className="content">
          <div className="heading">
            <h3 className="title">
              REPARACION Y VENTA DE
            </h3>
            <h2 className="description" >
              ALL IN ONE
            </h2>
          </div>
          {/*<div className="description">*/}
          {/*  ALL IN ONE*/}
          {/*</div>*/}
        </div>
        <div className="content-img">
          <div className="wrapper-form">
          <FormContact/>
          </div>
        </div>
      </div>

    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: url(${({bgImage})=> bgImage}) no-repeat scroll 0 0 / 100% 100% rgba(0, 0, 0, 0);
}
  //padding: 1.2rem;
  //color: #000;

  ${mediaQuery.minTablet} {
    padding: 3rem 0;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 3rem 3.5rem;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
    }
.content {
  align-self: center;
  padding-left: 2rem;
  .heading{
    padding-left: 2rem;
    .title {
      color: rgba(255, 255, 255, 0.94);
      font-weight: 800;
      //margin-bottom: 2rem;
      font-family: 'Intro Demo', sans-serif;
      font-size: 1.2rem;
      padding-bottom: 1.2rem;
    }

    .description {
      color: #FFF100;
      max-width: 40rem;
      font-weight: 500;
      font-size: 5.4rem;
      font-family: 'Intro Demo', sans-serif;
    }
  }


  .list-about {
    margin: 1rem 1.5rem;

    ul {
      li {
        width: auto;
        background: transparent;
        color: #2f2c2c;
        list-style: none;
        margin-bottom: 0.5rem;

        svg {
          margin-right: 0.7rem;
        }
      }
    }
  }
}
    .content-img {
      margin-top: 1rem;
      text-align: center;
      padding: 0 2rem;
      .wrapper-form{
        background: #1a1a1a;
        padding: 0.2rem;
        border-radius: 10px;
        padding: 1.5rem 2rem;
        color: black;
      }
      
    }
  }
`;
