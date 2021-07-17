import { Title } from "gamification-library";
import * as React from "react";
import { themeCustom } from "../../styles/theme";
import { TitleDefaultWrapper } from "./styles";

export interface TitleDefaultProps {
  align?: string;
  color?: string;
  padding?: string;
  font?: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string
}

const TitleDefault = ({
  level,
  align = "left",
  color = themeCustom.light.color.primary.one,
  padding = "1rem",
  font = '"Righteous", cursive',
  text= '',
}: TitleDefaultProps) => {
  return (
    <TitleDefaultWrapper
      align={align}
      color={color}
      padding={padding}
      font={font}
    >
      <Title level={level}>
        {text}
      </Title>
    </TitleDefaultWrapper>
  );
};

export default TitleDefault;
