import React, { useState } from "react";
import styled from "styled-components";
import { LogoServitec } from "../../../images";
import { useDevice } from "../../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { ButtonsFloating, WrapperComponent } from "../ui";
import { useNavigate } from "react-router";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
      />
      <header className="header">
        <WrapperComponent>
          <>
            {isMobile ? (
              <div className="menu-mobile">
                <div className="item-logo">
                  <img
                    src={LogoServitec}
                    alt="Logo Servitec Facil Factura"
                    onClick={() => navigate("/")}
                  />
                </div>
                <div
                  className="icon-bar"
                  onClick={() => setVisibleDrawer(true)}
                >
                  <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
              </div>
            ) : (
              <div className="menu-list">
                <div className="logo-img">
                  <Link to="/">
                    <img src={LogoServitec} alt="Logo Servitec Facil Factura" />
                  </Link>
                </div>
                <nav className="list">
                  <ul>
                    <a href="#inicio">
                      <li>INICIO</li>
                    </a>
                    <a href="#about-us">
                      <li>NOSOTROS</li>
                    </a>
                    <a href="#services">
                      <li>SERVICIOS</li>
                    </a>
                    <a href="#footer">
                      <li>CONTÁCTO</li>
                    </a>
                  </ul>
                </nav>
              </div>
            )}
          </>
        </WrapperComponent>
      </header>
      <main className="body">{children}</main>
      <Footer />
      <ButtonsFloating />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
  padding-top: 5rem;
  background-color: red;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.font2};
    font-family: "Intro Demo", sans-serif;
  }

  h1 {
    font-size: 2.7rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.font1};
    ${mediaQuery.minTablet} {
      font-size: 6rem;
    }
  }

  h2 {
    font-size: 2.1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.font1};

    ${mediaQuery.minTablet} {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 3rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  p,
  ul,
  li,
  span {
    color: ${({ theme }) => theme.colors.font3};
  }

  .header {
    width: 100%;
    position: fixed;
    z-index: 100;
    //max-width: 1250px;
    height: auto;
    background: ${({ theme }) => theme.colors.secondary};
    margin: auto;
    padding: 1rem;
    box-shadow: 0 6px 8px 0 rgb(12 0 46 / 6%);
    left: 0;
    top: 0;

    .menu-list {
      display: flex;
      padding: .2em 2em;
      .logo-img {
        width: 40%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 14rem;
        }
      }
      
      .list {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0;
          margin: 0;
          li {
            color: #fafafa;
            font-weight: bold;
            font-size: 1.1rem;
            font-family: inherit !important;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease-in-out;
            margin-left: 1.5rem;
            cursor: pointer;
          }
          li:hover {
            color: #ccc;
            border-bottom: 2px solid #fff100;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    .menu-mobile {
      width: 100%;
      color: ${({theme}) => theme.colors.white};
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      .item-logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 65%;
          max-width: 220px;
        }
      }

      .icon-bar {
        width: auto;
      }
    }
  }

  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
