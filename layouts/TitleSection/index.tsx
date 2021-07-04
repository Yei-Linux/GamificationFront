import { Icon, Row, Spacer, Title } from "gamification-library";
import React from "react";
import { TitleSectionWrapper } from "./styles";

export interface TitleSectionProps {
  text: string;
  iconId: string;
}

const TitleSection = ({ text, iconId }: TitleSectionProps) => {
  return (
    <TitleSectionWrapper>
      <Row justifyContent="flex-start">
        <Icon size="20px" name={iconId} />
        <Spacer direction="right" />
        <Title level="h4" fontWeight="BOLD">
          {text}
        </Title>
      </Row>
    </TitleSectionWrapper>
  );
};

export default TitleSection;
