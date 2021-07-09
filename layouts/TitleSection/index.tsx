import { Icon, Row, Spacer, Title } from "gamification-library";
import React from "react";
import { TitleSectionWrapper } from "./styles";

export interface TitleSectionProps {
  text: string;
  iconId?: string | any;
}

const TitleSection = ({ text, iconId = null }: TitleSectionProps) => {
  return (
    <TitleSectionWrapper>
      <Row justifyContent="center">
        {iconId && <Icon size="20px" name={iconId} />}
        <Spacer direction="right" />
        <Title level="h4" fontWeight="BOLD">
          {text}
        </Title>
      </Row>
    </TitleSectionWrapper>
  );
};

export default TitleSection;
