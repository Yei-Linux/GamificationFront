import { Avatar, List, ProgressBar, Title } from "gamification-library";
import React from "react";
import { DUMMY__LANGUAGES } from "../../../dummy/languages";
import * as S from "./styles";

export interface ISkill {
  title: string;
  description: string;
  percent: number;
  name: "javascript" | "python" | "java" | "c++";
}

export interface IAccountSkills {
  skills: ISkill[];
}

const AccountSkills = ({ skills }: IAccountSkills) => {
  return (
    <S.AccountSkills>
      <S.Title>
        <Title textAlign="center" fontWeight="light" level="h3">
          My Skills
        </Title>
      </S.Title>

      {skills.map(
        ({ title, name, description, percent }: ISkill, index: number) => (
          <S.Section key={index}>
            <List.Item
              noBorder
              avatar={
                <Avatar background="white" src={DUMMY__LANGUAGES[name].src} />
              }
              title={title}
              description={description}
            >
              <ProgressBar
                maxWidth="40px"
                maxHeight="40px"
                percent={percent}
                type="circle"
                backgroundProgressBar="transparent"
              />
            </List.Item>
          </S.Section>
        )
      )}
    </S.AccountSkills>
  );
};

export default AccountSkills;
