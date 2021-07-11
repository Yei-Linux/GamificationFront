/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";

import { Wave, Slider } from "gamification-library";
import BannerMySectionsItem from "../BannerMySectionsItem";
import Section from "../../layouts/Section";
import { themeCustom } from "../../styles/theme";

export interface BannerMySectionsProps {}

const BannerMySections = () => {
  return (
    <Fragment>
      <Wave direction="bottom">
        <Section
          backgroundSection="#7f9cf5"
          titleColor={themeCustom.light.color.neutral.nine}
        >
          <Slider
            slidesPerView={{
              phone: 2,
              tablet: 4,
              laptop: 6,
              desktop: 7,
            }}
          >
            <BannerMySectionsItem />
            <BannerMySectionsItem />
            <BannerMySectionsItem />
            <BannerMySectionsItem />
            <BannerMySectionsItem />
            <BannerMySectionsItem />
          </Slider>
        </Section>
      </Wave>
    </Fragment>
  );
};

export default BannerMySections;
