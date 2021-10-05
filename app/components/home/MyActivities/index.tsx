import React from "react";
import { DUMMY__MY__ACTIVITIES } from "../../../dummy/home";
import { useArray } from "../../../hooks/useArray";
import { IMyActivity } from "../../../types/home";
import Section from "../../layouts/Section";
import TitleSection from "../../layouts/TitleSection";
import SectionList from "./SectionList";

import * as S from "./styles";

const MyActivities = () => {
  const { value: myActivities } = useArray(DUMMY__MY__ACTIVITIES);

  return (
    <Section>
      <S.MyActivities>
        {myActivities.map(
          ({ title, iconId, sections }: IMyActivity, index: number) => (
            <S.Item key={index}>
              <TitleSection
                align="center"
                level="h3"
                text={title}
                iconId={iconId}
              />
              <SectionList sections={sections} />
            </S.Item>
          )
        )}
      </S.MyActivities>
    </Section>
  );
};

export default MyActivities;
