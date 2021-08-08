import { Icon, Row, Spacer, Title } from "gamification-library";
import React from "react";
import {
  AccountAchieveSection,
  AccountAchievesTitle,
  AccountAchievesWrapper,
  AccountBadgesContainer,
} from "./styles";

export interface AccountAchievesProps {}

const AccountAchieves = ({}: AccountAchievesProps) => {
  return (
    <AccountAchievesWrapper>
      <AccountAchievesTitle>
        <Title textAlign="CENTER" fontWeight="LIGHT" level="h3">
          My Achieves
        </Title>
      </AccountAchievesTitle>

      <AccountAchieveSection>
        <Title level="h4">Badges (3)</Title>
        <AccountBadgesContainer>
          <Row justifyContent="flex-start">
            <Icon size="40px" name="rocket" />
            <Spacer direction="right" />
            <Icon size="40px" name="rocket" />
            <Spacer direction="right" />
            <Icon size="40px" name="rocket" />
          </Row>
        </AccountBadgesContainer>
      </AccountAchieveSection>
      <AccountAchieveSection>
        <Title level="h4">Trophies (3)</Title>

        <AccountBadgesContainer>
          <Row justifyContent="flex-start">
            <Icon size="40px" name="rocket" />
            <Spacer direction="right" />
            <Icon size="40px" name="rocket" />
            <Spacer direction="right" />
            <Icon size="40px" name="rocket" />
          </Row>
        </AccountBadgesContainer>
      </AccountAchieveSection>
    </AccountAchievesWrapper>
  );
};

export default AccountAchieves;
