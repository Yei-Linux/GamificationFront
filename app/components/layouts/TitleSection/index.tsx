import * as React from "react";
import * as S from "./styles";

import { Icon, Spacer, Title } from "gamification-library";
import { themeCustom } from "../../../../styles/theme";
import classNames from "classnames";
import { TEXT__ALIGN__TO__FLEX } from "../../../constants/layouts";

export type TLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleSectionProps {
  level: TLevels;
  text: string;
  iconId?: string;
  align?: "center" | "justify" | "left" | "right";
  color?: string;
  padding?: string;
  font?: string;
  fontWeight?: "bold" | "normal";
}

const TitleSection = ({
  level,
  text,
  iconId,
  align = "left",
  color = themeCustom.light.primary.jordyBlue,
  padding = "1rem",
  font = '"Righteous", cursive',
  fontWeight = "normal",
}: TitleSectionProps) => {
  return (
    <S.TitleSection
      className={classNames({ flexBehavior: iconId })}
      $align={TEXT__ALIGN__TO__FLEX[align]}
      $color={color}
      $padding={padding}
      $font={font}
    >
      {iconId && <Icon size="20px" name={iconId} />}
      {iconId && <Spacer direction="right" />}

      <Title textAlign={align} level={level} fontWeight={fontWeight}>
        {text}
      </Title>
    </S.TitleSection>
  );
};

export default TitleSection;
