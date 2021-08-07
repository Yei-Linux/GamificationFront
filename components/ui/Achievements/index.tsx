import { FeaturedCard, RichText, Title } from "gamification-library";
import React from "react";
import TitleDefault from "../../../layouts/TitleDefault";
import { themeCustom } from "../../../styles/theme";
import {
  AchievementsCardContainer,
  AchievementsContainer,
  AchievementsWrapper,
  AchievementTitle,
} from "./styles";

interface IAchievementItem {
  titleItem: string;
  text: string;
}

export interface AchievementsProps {
  title: string;
  children: React.ReactNode;
}

const AchievementsItem = ({ titleItem, text }: IAchievementItem) => (
  <FeaturedCard
    themeType="warm"
    direction="vertical"
    iconSize="30px"
    iconId="eye"
    text={
      <AchievementsCardContainer>
        <Title textAlign="CENTER" level="h5">
          {titleItem}
        </Title>
        <RichText textAlign="CENTER" text={text} />
      </AchievementsCardContainer>
    }
  />
);

const Achievements = ({ title, children }: AchievementsProps) => {
  return (
    <AchievementsWrapper>
      <AchievementTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.secondary.three}
          level="h4"
          text={title}
        />
      </AchievementTitle>
      <AchievementsContainer>{children}</AchievementsContainer>
    </AchievementsWrapper>
  );
};

Achievements.Item = AchievementsItem;

export default Achievements;
