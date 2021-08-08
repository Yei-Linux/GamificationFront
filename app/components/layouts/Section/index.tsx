import React from "react";
import TitleSection from "../TitleSection";
import * as S from "./styles";

export interface ISectionProps {
  children: React.ReactNode;
  backgroundSection?: string;
  titleColor?: string;
  title?: string;
}

const Section = ({
  children,
  backgroundSection = "white",
  titleColor = "#5fa4ff",
  title = "Projects and Ideas",
}: ISectionProps) => {
  return (
    <S.Section background={backgroundSection}>
      <TitleSection color={titleColor} level="h1" align="CENTER" text={title} />

      {children}
    </S.Section>
  );
};

export default Section;
