import {
  FeaturedCard,
  Spacer,
  Title,
} from "gamification-library";
import React, { Fragment, useState } from "react";
import { themeCustom } from "../../../../styles/theme";
import { DUMMY_COURSE_DETAIL } from "../../../dummy/courses";
import { ICourseDetail, ISummary } from "../../../types/course";
import Achievements from "../../commons/Achievements";
import { IAchievementsItem } from "../../commons/Achievements/AchievementsItem";
import TutorInfo from "../../commons/TutorInfo";
import TitleSection from "../../layouts/TitleSection";

import * as S from "./styles";

export interface CourseDetailProps {}

const CourseDetail = () => {
  const [
    {
      description,
      tutor: { id: tutorId, name: tutorName, description: tutorDescription },
      achievements,
      summary,
    },
  ] = useState<ICourseDetail>(DUMMY_COURSE_DETAIL);

  return (
    <S.CourseDetail>
      <S.Description>{description}</S.Description>

      <Spacer direction="bottom" />

      <TutorInfo id={tutorId} name={tutorName} description={tutorDescription} />

      <Achievements title="What personal skills do you improve in this course">
        {achievements.map(
          (
            { title, description, icondId, themeType }: IAchievementsItem,
            index: number
          ) => (
            <Achievements.Item
              key={index}
              title={title}
              description={description}
              icondId={icondId}
              themeType={themeType}
            />
          )
        )}
      </Achievements>

      <S.Summary>
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.secondary.prim}
          level="h4"
          text="Classes of this course"
        />

        <Spacer direction="bottom" />

        <S.Classes>
          {summary.map(({ name }: ISummary, index: number) => (
            <Fragment key={index}>
              <FeaturedCard
                text={
                  <div>
                    <Title level="h3">{name}</Title>
                  </div>
                }
              />

              <Spacer direction="bottom" />
            </Fragment>
          ))}
        </S.Classes>
      </S.Summary>
    </S.CourseDetail>
  );
};

export default CourseDetail;
