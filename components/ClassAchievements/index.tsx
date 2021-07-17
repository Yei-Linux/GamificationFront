import { FeaturedCard, RichText, Title } from "gamification-library";
import React from "react";
import TitleDefault from "../../layouts/TitleDefault";
import { themeCustom } from "../../styles/theme";
import {
  AchievementsCardContainer,
  ClassAchievementsContainer,
  ClassAchievementsWrapper,
  ClassAchievementTitle,
} from "./styles";

export interface ClassAchievementsProps {}

const ClassAchievements = ({}: ClassAchievementsProps) => {
  return (
    <ClassAchievementsWrapper>
      <ClassAchievementTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.secondary.three}
          level="h4"
          text="What personal skills do you improve in this class"
        />
      </ClassAchievementTitle>
      <ClassAchievementsContainer>
        <FeaturedCard
          themeType="warm"
          direction="vertical"
          iconSize="30px"
          iconId="eye"
          text={
            <AchievementsCardContainer>
              <Title textAlign="CENTER" level="h5">
                Visual
              </Title>
              <RichText textAlign="CENTER" text="Videos,etc" />
            </AchievementsCardContainer>
          }
        />
        <FeaturedCard
          themeType="warm"
          direction="vertical"
          iconSize="30px"
          iconId="ear"
          text={
            <AchievementsCardContainer>
              <Title textAlign="CENTER" level="h5">
                Auditivo
              </Title>
              <RichText textAlign="CENTER" text="Audios,etc" />
            </AchievementsCardContainer>
          }
        />
        <FeaturedCard
          themeType="warm"
          direction="vertical"
          iconSize="30px"
          iconId="brain"
          text={
            <AchievementsCardContainer>
              <Title textAlign="CENTER" level="h5">
                Memoristico
              </Title>
              <RichText textAlign="CENTER" text="Memorizar,etc" />
            </AchievementsCardContainer>
          }
        />
      </ClassAchievementsContainer>
    </ClassAchievementsWrapper>
  );
};

export default ClassAchievements;
