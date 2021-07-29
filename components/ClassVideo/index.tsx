import { Video } from "gamification-library";
import React from "react";
import TitleDefault from "../../layouts/TitleDefault";
import { themeCustom } from "../../styles/theme";
import { ClassVideoContainer, ClassVideoTitle } from "./styles";

export interface ClassVideoProps {}

const ClassVideo = () => {
  return (
    <ClassVideoContainer>
      <ClassVideoTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text="Classroom Class"
        />
      </ClassVideoTitle>

      <Video />
    </ClassVideoContainer>
  );
};

export default ClassVideo;
