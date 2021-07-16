import { Title } from "gamification-library";
import React from "react";
import { SectionWrapper, TitleContainer } from "./styles";

export interface SectionProps {
  children: React.ReactNode;
  backgroundSection?: string;
  titleColor?: string;
  title?: string;
}

const Section = ({
  children,
  backgroundSection = "white",
  titleColor = "#5fa4ff",
  title = "Proyectos e Ideas",
}: SectionProps) => {
  return (
    <SectionWrapper background={backgroundSection}>
      <TitleContainer color={titleColor}>
        <Title level="h1">{title}</Title>
      </TitleContainer>

      {children}
    </SectionWrapper>
  );
};

export default Section;
