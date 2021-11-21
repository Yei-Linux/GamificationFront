import { Avatar, List, Spacer } from "gamification-library";
import * as React from "react";
import { themeCustom } from "../../../../styles/theme";
import TitleSection from "../../layouts/TitleSection";

import * as S from "./styles";

export interface ITutor {
  id: string;
  name: string;
  description: string;
}

const TutorInfo = ({ name, description }: ITutor) => {
  return (
    <S.Tutor>
      <TitleSection
        padding="0px"
        align="left"
        color={themeCustom.light.neutral[300]}
        level="h4"
        text="Know more about your teacher"
      />

      <Spacer direction="bottom" />

      <S.TutorInfo>
        <List.Item
          noBorder
          avatar={
            <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
          }
          title={name}
          description={description}
        />
      </S.TutorInfo>
    </S.Tutor>
  );
};

export default TutorInfo;
