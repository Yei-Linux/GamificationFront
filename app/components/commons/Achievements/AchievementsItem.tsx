import { FeaturedCard, RichText, Title } from "gamification-library";
import React from "react";

import * as S from "./styles"

export interface AchievementsItemProps {
  title: string;
  description: string;
}

const AchievementsItem = ({ title, description }: AchievementsItemProps) => {
  return (
    <FeaturedCard
      themeType="warm"
      direction="vertical"
      iconSize="30px"
      iconId="eye"
      text={
        <S.CardContainer>
          <Title textAlign="CENTER" level="h5">
            {title}
          </Title>
          <RichText textAlign="CENTER" text={description} />
        </S.CardContainer>
      }
    />
  );
};

export default AchievementsItem;
