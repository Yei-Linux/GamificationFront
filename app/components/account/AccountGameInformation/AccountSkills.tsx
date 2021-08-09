import { Icon, List, Title } from "gamification-library";
import React from "react";
import * as S from "./styles";

export interface ISkill {
  title: string;
  description: string;
  name: string;
}

export interface IAccountSkills {
  skills: ISkill[];
}

const AccountSkills = ({ skills }: IAccountSkills) => {
  return (
    <S.AccountSkills>
      <S.Title>
        <Title textAlign="CENTER" fontWeight="LIGHT" level="h3">
          My Skills
        </Title>
      </S.Title>

      {skills.map(({ title, name, description }: ISkill, index: number) => (
        <S.Section key={index}>
          <List.Item
            noBorder
            avatar={<Icon size="25px" name={name} />}
            title={title}
            description={description}
          />
        </S.Section>
      ))}
    </S.AccountSkills>
  );
};

export default AccountSkills;
