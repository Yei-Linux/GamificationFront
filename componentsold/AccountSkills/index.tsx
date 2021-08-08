import { Icon, List, Title } from "gamification-library";
import React from "react";
import { AccountAchievesProps } from "../AccountAchieves";
import {
  AccountSkillsSection,
  AccountSkillsTitle,
  AccountSkillsWrapper,
} from "./styles";

export interface AccountSkillsProps {}

const AccountSkills = ({}: AccountAchievesProps) => {
  return (
    <AccountSkillsWrapper>
      <AccountSkillsTitle>
        <Title textAlign="CENTER" fontWeight="LIGHT" level="h3">
          My Skills
        </Title>
      </AccountSkillsTitle>
      <AccountSkillsSection>
        <List.Item
          noBorder
          avatar={<Icon size="25px" name="book" />}
          title="Javascript"
          description="Level 1"
        />
      </AccountSkillsSection>
      <AccountSkillsSection>
        <List.Item
          noBorder
          avatar={<Icon size="25px" name="book" />}
          title="Java"
          description="Level 1"
        />
      </AccountSkillsSection>
      <AccountSkillsSection>
        <List.Item
          noBorder
          avatar={<Icon size="25px" name="book" />}
          title="Typescript"
          description="Level 1"
        />
      </AccountSkillsSection>
      <AccountSkillsSection>
        <List.Item
          noBorder
          avatar={<Icon size="25px" name="book" />}
          title="Python"
          description="Level 1"
        />
      </AccountSkillsSection>
    </AccountSkillsWrapper>
  );
};

export default AccountSkills;
