import React from "react";
import { themeCustom } from "../../../../styles/theme";
import TitleSection from "../../layouts/TitleSection";
import AchievementsItem from "./AchievementsItem";

import * as S from "./styles"

export interface AchievementsProps {
  title: string;
  children: React.ReactNode;
}

const Achievements = ({ title, children }: AchievementsProps) => {
  return (
    <S.Achievements>
      <S.Title>
        <TitleSection
          padding="0px"
          align="LEFT"
          color={themeCustom.light.color.secondary.three}
          level="h4"
          text={title}
        />
      </S.Title>
      <S.Content>{children}</S.Content>
    </S.Achievements>
  );
};

Achievements.Item = AchievementsItem;

export default Achievements;
