import React from "react";
import styled from "styled-components";
import { InitialComponent, AboutUs, Services } from "../../components/public";
import { BrandCarousel } from "../../components/public/home/BrandCarousel";

export const Home = ({ onEventGaClickButton, onEventGaClickVideos }) => {
  return (
    <>
      <Container>
        {/*<Carousel*/}
        {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*  onEventGaClickButton={onEventGaClickButton}*/}
        {/*/>*/}
        <InitialComponent />
        <BrandCarousel/>
        <AboutUs />
        <Services />
        {/*<WrapperComponent>*/}
        {/*  <VideoSection*/}
        {/*    onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*    onEventGaClickButton={onEventGaClickButton}*/}
        {/*    onEventGaClickVideos={onEventGaClickVideos}*/}
        {/*  />*/}

        {/*</WrapperComponent>*/}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
