import { Spacer } from "gamification-library";
import React from "react";
import { themeCustom } from "../../../../styles/theme";
import { ISectionItem } from "../../commons/SectionList/SectionItem";
import SectionList from "../../commons/SectionList/SectionList";
import TitleSection from "../../layouts/TitleSection";
import * as S from "./styles";

export interface ISummaries {
  summaries: ISectionItem[];
}

const Summaries = ({ summaries }: ISummaries) => {
  return (
    <S.Summary>
      <TitleSection
        padding="0px"
        align="left"
        color={themeCustom.light.neutral[300]}
        level="h4"
        text="Classes of this course"
      />

      <Spacer direction="bottom" />

      <S.Classes>
        <SectionList
          alignItems="start"
          sections={summaries}
          prefixUrl="/classes"
        />
      </S.Classes>
    </S.Summary>
  );
};

export default Summaries;
