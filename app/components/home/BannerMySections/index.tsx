import React from "react";

import { Wave, Slider } from "gamification-library";
import Section from "../../layouts/Section";
import { themeCustom } from "../../../../styles/theme";
import MySectionItem, { IMySectionItem } from "./MySectionItem";
import { useArray } from "../../../hooks/useArray";
import { DUMMY__MY__SECTIONS } from "../../../dummy/home";

const BannerMySections = () => {
  const { value: mySections } = useArray(DUMMY__MY__SECTIONS);

  return (
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
          {mySections.map((item: IMySectionItem, index: number) => (
            <MySectionItem
              key={index}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </Slider>
      </Section>
    </Wave>
  );
};

export default BannerMySections;
