import { FeaturedCard, RichText, Row, Title } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";

import * as S from "./styles";

export interface ITask {
  numberTasks: string;
  title: string;
}

export interface AccountTaskInformationProps {
  metrics: ITask[];
}

const AccountTaskInformation = ({ metrics }: AccountTaskInformationProps) => {
  return (
    <S.AccountTask>
      <Section title="My Metrics" backgroundSection="transparent">
        <Row>
          {metrics.map(({ title, numberTasks }: ITask, index: number) => (
            <S.TaskItem key={index}>
              <FeaturedCard
                width="full"
                text={
                  <div>
                    <Title level="h3">{numberTasks}</Title>
                    <RichText text={title} />
                  </div>
                }
              />
            </S.TaskItem>
          ))}
        </Row>
      </Section>
    </S.AccountTask>
  );
};

export default AccountTaskInformation;
