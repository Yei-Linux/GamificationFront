import { Icon, List } from "gamification-library";
import React from "react";
import TitleDefault from "../../app/components/layouts/TitleSection";
import { themeCustom } from "../../styles/theme";
import {
  ClassInformationHeaderWrapper,
  ClassTitleContainer,
  TutorInfoContainer,
} from "./styles";

export interface ClassInformationHeaderProps {}

const ClassInformationHeader = ({}: ClassInformationHeaderProps) => {
  return (
    <ClassInformationHeaderWrapper>
      <ClassTitleContainer>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h3"
          text="Theme: Learning about data structures with Javascript"
        />
      </ClassTitleContainer>
      <TutorInfoContainer>
        <List.Item
          noBorder
          avatar={<Icon size="25px" name="book" />}
          title="Rhan Kidder"
          description="Course Tutor"
        />
      </TutorInfoContainer>
    </ClassInformationHeaderWrapper>
  );
};

export default ClassInformationHeader;
