import { Spacer } from "@gamiui/standard";
import React from "react";
import Achievements from "../../commons/Achievements";
import { IAchievementsItem } from "../../commons/Achievements/AchievementsItem";
import { ISectionItem } from "../../commons/SectionList/SectionItem";
import TutorInfo, { ITutor } from "../../commons/TutorInfo";
import Summaries from "../Summaries";

import * as S from "./styles";

export interface ICourseDetail {
  id?: string;
  title?: string;
  description: string;

  tutor: ITutor;
  achievements: IAchievementsItem[];
  summaries: ISectionItem[];
}

const CourseDetail = ({
  description,
  tutor: { id: tutorId, name: tutorName, description: tutorDescription },
  achievements,
  summaries,
}: ICourseDetail) => {
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

      <Summaries summaries={summaries} />
    </S.CourseDetail>
  );
};

export default CourseDetail;
