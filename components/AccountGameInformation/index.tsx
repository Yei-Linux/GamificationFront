import { Card, Row } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";
import AccountAchieves from "../AccountAchieves";
import AccountSkills from "../AccountSkills";
import { AccountGameItem } from "./styles";

export interface AccountGameInformationProps {}

const AccountGameInformation = ({}: AccountGameInformationProps) => {
  return (
    <Section title="Mis Logros" backgroundSection="transparent">
      <Row>
        <AccountGameItem>
          <Card width="FULL" heigth="FULL">
            <AccountAchieves />
          </Card>
        </AccountGameItem>

        <AccountGameItem>
          <Card width="FULL" heigth="FULL">
            <AccountSkills />
          </Card>
        </AccountGameItem>
      </Row>
    </Section>
  );
};

export default AccountGameInformation;
