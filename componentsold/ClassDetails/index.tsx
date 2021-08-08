import React from "react";
import TitleDefault from "../../app/components/layouts/TitleSection";
import { themeCustom } from "../../styles/theme";
import ClassInformationHeader from "../ClassInformationHeader";
import Achievements from "../ui/Achievements";
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
        <Achievements title="What personal skills do you improve in this class">
          <Achievements.Item titleItem="Visual" text="Videos,etc" />
          <Achievements.Item titleItem="Auditivo" text="Audios,etc" />
          <Achievements.Item titleItem="Memoria" text="Memorizar,etc" />
        </Achievements>
      </ClassDetailsContainer>
    </ClassDetailsWrapper>
  );
};

export default ClassDetails;
