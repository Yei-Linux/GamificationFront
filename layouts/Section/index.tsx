import { Title } from "gamification-library";
import React from "react";
import { SectionWrapper, TitleContainer } from "./styles";

export interface SectionProps {
  children: React.ReactNode;
  backgroundSection?: string;
  titleColor?: string;
}

const Section = ({
  children,
  backgroundSection = "white",
  titleColor = "#5fa4ff",
}: SectionProps) => {
  return (
    <SectionWrapper background={backgroundSection}>
      <TitleContainer color={titleColor}>
        <Title level="h1">Proyectos e Ideas</Title>
      </TitleContainer>

      {children}
    </SectionWrapper>
  );
};

export default Section;
