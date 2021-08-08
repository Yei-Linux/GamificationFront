import * as React from "react";
import * as S from "./styles";

import { Icon, Spacer, Title } from "gamification-library";
import { themeCustom } from "../../../../styles/theme";

export interface TitleSectionProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  iconId?: string;
  align?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
  color?: string;
  padding?: string;
  font?: string;
  fontWeight?: "BOLD" | "NORMAL";
}

const TitleSection = ({
  level,
  text,
  iconId,
  align = "LEFT",
  color = themeCustom.light.color.primary.one,
  padding = "1rem",
  font = '"Righteous", cursive',
  fontWeight = "NORMAL",
}: TitleSectionProps) => {
  return (
    <S.TitleSection color={color} padding={padding} font={font}>
      {iconId && <Icon size="20px" name={iconId} />}
      {iconId && <Spacer direction="right" />}

      <Title textAlign={align} level={level} fontWeight={fontWeight}>
        {text}
      </Title>
    </S.TitleSection>
  );
};

export default TitleSection;
