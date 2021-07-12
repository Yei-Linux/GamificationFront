import { Icon, Row, Title } from "gamification-library";
import React from "react";
import { AccountAchieveSection, AccountAchievesWrapper } from "./styles";

export interface AccountAchievesProps {}

const AccountAchieves = ({}: AccountAchievesProps) => {
  return (
    <AccountAchievesWrapper>
      <AccountAchieveSection>
        <Title level="h3">Badges (3)</Title>
        <Row justifyContent="flex-start">
          <Icon name="rocket" />
          <Icon name="rocket" />
          <Icon name="rocket" />
        </Row>
      </AccountAchieveSection>
      <AccountAchieveSection>
        <Title level="h3">Trophies (3)</Title>
        <Row justifyContent="flex-start">
          <Icon name="rocket" />
          <Icon name="rocket" />
          <Icon name="rocket" />
        </Row>
      </AccountAchieveSection>
      <AccountAchieveSection>
        <Title level="h3">Badges (3)</Title>
        <Row justifyContent="flex-start">
          <Icon name="rocket" />
          <Icon name="rocket" />
          <Icon name="rocket" />
        </Row>
      </AccountAchieveSection>
    </AccountAchievesWrapper>
  );
};

export default AccountAchieves;
