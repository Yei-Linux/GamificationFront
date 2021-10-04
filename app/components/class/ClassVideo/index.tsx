import { Video } from "gamification-library";
import React from "react";
import { themeCustom } from "../../../../styles/theme";
import TitleSection from "../../layouts/TitleSection";

import * as S from "./styles";

export interface IClassVideo {
  urlVideo: string;
}

const ClassVideo = ({ urlVideo }: IClassVideo) => {
  return (
    <S.ClassVideo>
      <S.Title>
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level="h2"
          text="Classroom Class"
        />
      </S.Title>

      <Video url={urlVideo} />
    </S.ClassVideo>
  );
};

export default ClassVideo;
