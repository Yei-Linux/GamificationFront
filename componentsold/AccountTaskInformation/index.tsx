import { FeaturedCard, RichText, Row, Title } from "gamification-library";
import React from "react";
import Section from "../../app/components/layouts/Section";
import { AccountTaskItem, AccountTaskWrapper } from "./styles";

export interface AccountTaskInformationProps {}

const AccountTaskInformation = ({}: AccountTaskInformationProps) => {
  return (
    <AccountTaskWrapper>
      <Section title="Mis tareas" backgroundSection="transparent">
        <Row>
          <AccountTaskItem>
            <FeaturedCard
              text={
                <div>
                  <Title level="h3">0</Title>
                  <RichText text="Tareas completadas" />
                </div>
              }
            />
          </AccountTaskItem>
          <AccountTaskItem>
            <FeaturedCard
              themeType="spring"
              text={
                <div>
                  <Title level="h3">0</Title>
                  <RichText text="Examenes resueltos" />
                </div>
              }
            />
          </AccountTaskItem>
          <AccountTaskItem>
            <FeaturedCard
              text={
                <div>
                  <Title level="h3">0</Title>
                  <RichText text="Misiones resueltas" />
                </div>
              }
            />
          </AccountTaskItem>
        </Row>
      </Section>
    </AccountTaskWrapper>
  );
};

export default AccountTaskInformation;
