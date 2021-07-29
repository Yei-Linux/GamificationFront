import React from "react";
import TitleDefault from "../../layouts/TitleDefault";
import { themeCustom } from "../../styles/theme";
import ClassAchievements from "../ClassAchievements";
import ClassInformationHeader from "../ClassInformationHeader";
import {
  ClassDetailsContainer,
  ClassDetailsTitle,
  ClassDetailsWrapper,
} from "./styles";

export interface ClassDetailsProps {}

const ClassDetails = ({}: ClassDetailsProps) => {
  return (
    <ClassDetailsWrapper>
      <ClassDetailsTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text="Classroom Details"
        />
      </ClassDetailsTitle>
      <ClassDetailsContainer>
        <ClassInformationHeader />
        <ClassAchievements />
      </ClassDetailsContainer>
    </ClassDetailsWrapper>
  );
};

export default ClassDetails;
