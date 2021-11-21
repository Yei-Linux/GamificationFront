import React from "react";
import * as S from "./styles";

import TitleSection from "../../layouts/TitleSection";
import { themeCustom } from "../../../../styles/theme";
import TutorInfo, { ITutor } from "../../commons/TutorInfo";
import Achievements from "../../commons/Achievements";
import { IAchievementsItem } from "../../commons/Achievements/AchievementsItem";

export interface IClassDetail {
  id: string;
  title: string;
  tutor: ITutor;
  achievements: IAchievementsItem[];
}

const ClassDetails = ({
  tutor: { id: tutorId, name: tutorName, description: tutorDescription },
  achievements,
}: IClassDetail) => {
  return (
    <S.ClassDetail>
      <S.Title>
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level="h2"
          text="Classroom Details"
        />
      </S.Title>

      <S.Content>
        <S.Header>
          <TutorInfo
            id={tutorId}
            name={tutorName}
            description={tutorDescription}
          />
        </S.Header>

        <Achievements title="What personal skills do you improve in this class">
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
      </S.Content>
    </S.ClassDetail>
  );
};

export default ClassDetails;
