import { Row } from "gamification-library";
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
          (
            {
              title,
              iconId,
              sections,
              prefixUrl,
              viewAllButton: { hasViewAllButton, url },
            }: IMyActivity,
            index: number
          ) => (
            <S.Item key={index}>
              <TitleSection
                align="center"
                level="h3"
                text={title}
                iconId={iconId}
              />
              <SectionList prefixUrl={prefixUrl} sections={sections} />
              {hasViewAllButton && url && (
                <Row height="auto" justifyContent="center">
                  <S.ViewAllLink isExternal text="View all" href={url} />
                </Row>
              )}
            </S.Item>
          )
        )}
      </S.MyActivities>
    </Section>
  );
};

export default MyActivities;
