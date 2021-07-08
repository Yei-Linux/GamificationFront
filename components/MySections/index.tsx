/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";

import { Title, Wave, Slider } from "gamification-library";
import { MainBanner, TitleContainer } from "./styles";
import MySectionItem from "../MySectionItem";

export interface MySectionProps {}

const MySections = () => {
  return (
    <Fragment>
      <Wave direction="bottom">
        <MainBanner>
          <TitleContainer>
            <Title level="h2">Mis secciones</Title>
          </TitleContainer>

          <Slider
            slidesPerView={{
              phone: 2,
              tablet: 4,
              laptop: 6,
              desktop: 7,
            }}
          >
            <MySectionItem />
            <MySectionItem />
            <MySectionItem />
            <MySectionItem />
            <MySectionItem />
            <MySectionItem />
          </Slider>
        </MainBanner>
      </Wave>
    </Fragment>
  );
};

export default MySections;
