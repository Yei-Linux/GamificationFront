import { Card, Row } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";
import AccountBadges, { IBadge } from "./AccountBadges";
import AccountSkills, { ISkill } from "./AccountSkills";

import * as S from "./styles";

export interface AccountGameInformationProps {
  badges: IBadge[];
  skills: ISkill[];
}

const AccountGameInformation = ({
  badges,
  skills,
}: AccountGameInformationProps) => {
  return (
    <Section title="Mis Logros" backgroundSection="transparent">
      <Row>
        <S.GameItem>
          <Card width="full" heigth="full">
            <AccountBadges badges={badges} />
          </Card>
        </S.GameItem>

        <S.GameItem>
          <Card width="full" heigth="full">
            <AccountSkills skills={skills} />
          </Card>
        </S.GameItem>
      </Row>
    </Section>
  );
};

export default AccountGameInformation;
