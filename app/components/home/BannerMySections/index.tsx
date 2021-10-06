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
        title="Recommended Challenges"
        backgroundSection="#7f9cf5"
        titleColor={themeCustom.light.neutral[800]}
      >
        <Slider
          isAutoplay
          slidesPerView={{
            phone: 2,
            tablet: 4,
            laptop: 6,
            desktop: 7,
          }}
          dotsConfig={{
            activeColor: themeCustom.light.semantic.spring,
            inactiveColor: themeCustom.light.neutral[500],
          }}
          arrowsConfig={{
            activeColor: themeCustom.light.semantic.spring,
            inactiveColor: themeCustom.light.neutral[500],
          }}
        >
          {mySections.map(
            (
              { title, description, iconId, id }: IMySectionItem,
              index: number
            ) => (
              <MySectionItem
                key={index}
                title={title}
                description={description}
                iconId={iconId}
                id={id}
              />
            )
          )}
        </Slider>
      </Section>
    </Wave>
  );
};

export default BannerMySections;
