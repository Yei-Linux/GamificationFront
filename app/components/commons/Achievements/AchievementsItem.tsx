import { FeaturedCard, RichText, Title } from "gamification-library";
import React from "react";

import * as S from "./styles";

export interface IAchievementsItem {
  title: string;
  description: string;
  icondId?: string;
  themeType?: "warm" | "sky" | "skin" | "earth" | "spring";
}

const AchievementsItem = ({
  title,
  description,
  icondId = "eye",
  themeType = "warm",
}: IAchievementsItem) => {
  return (
    <FeaturedCard
      themeType={themeType}
      direction="vertical"
      iconSize="30px"
      iconId={icondId}
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
