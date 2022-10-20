import React from "react";
import styled from "styled-components";
import { UniverseBackground } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { FormContact } from "../ui";

export const InitialComponent = () => {
  return (
    <Container id="inicio" bgImage={UniverseBackground}>
      <div className="content-items">
        <div className="content">
          <div className="heading">
            <h3 className="title">REPARACION Y VENTA DE</h3>
            <h2 className="description">ALL IN ONE</h2>
            <h3>¿IMAGEN CON PUNTOS? ¿SE APAGA O SE REINICIA SOLO?</h3>
            <h3>¡Tenemos la solución!</h3>
          </div>
        </div>
        <div className="content-img">
          <div className="wrapper-form">
            <FormContact />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: url(${({ bgImage }) => bgImage}) no-repeat scroll 0 0 / 100% 100%
    rgba(0, 0, 0, 0);
  background-position: center center;
  background-size: cover;

  ${mediaQuery.minTablet} {
    padding: 3rem 0;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
      padding: 3rem;
    }

    .content {
      align-self: center;
      padding-left: 0;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr 30rem;
        padding-left: 2rem;
      }

      .heading {
        .title {
          color: ${({ theme }) => theme.colors.font1};
          font-weight: 800;
          font-family: "Intro Demo", sans-serif;
          font-size: 1.2rem;
          padding-top: 1.2rem;
          ${mediaQuery.minTablet} {
            grid-template-columns: 1fr 30rem;
            padding-bottom: 1.2rem;
          }
        }

        .description {
          color: ${({ theme }) => theme.colors.primary};
          max-width: 40rem;
          font-weight: 500;
          font-size: 4rem;
          font-family: "Intro Demo", sans-serif;
          line-height: 4rem;
          ${mediaQuery.minTablet} {
            font-size: 5.4rem;
          }
        }
        h3 {
          font-size: 1.5em;
          ${mediaQuery.minTablet} {
            font-size: 1.7em;
          }
        }
      }

      .list-about {
        margin: 1rem 1.5rem;

        ul {
          li {
            width: auto;
            background: transparent;
            color: ${({ theme }) => theme.colors.font3};
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
      .wrapper-form {
        width: 100%;
        max-width: 30em;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
        padding: 1.5rem 2rem;
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
`;
