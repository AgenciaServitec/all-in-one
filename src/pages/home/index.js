import React from "react";
import styled from "styled-components";
import {AboutUs, Services, Marcas} from "../../components";
import {FormContact, WrapperComponent} from "../../components/ui";

export const Home = ({
  onEventGaClickButton,
  onEventGaClickVideos,
}) => {
  return (
    <>
      <Container>
        {/*<Carousel*/}
        {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*  onEventGaClickButton={onEventGaClickButton}*/}
        {/*/>*/}
          <AboutUs
              onEventGaClickButton={onEventGaClickButton}
          />
          <Marcas onEventGaClickButton={onEventGaClickButton}/>
          <Services
              onEventGaClickButton={onEventGaClickButton}
          />
        {/*<WrapperComponent>*/}
        {/*  <VideoSection*/}
        {/*    onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*    onEventGaClickButton={onEventGaClickButton}*/}
        {/*    onEventGaClickVideos={onEventGaClickVideos}*/}
        {/*  />*/}

        {/*</WrapperComponent>*/}
      </Container>
      {/*<FormContact*/}
      {/*  onEventGaClickButton={onEventGaClickButton}*/}
      {/*/>*/}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
