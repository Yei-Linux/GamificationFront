import { FeaturedCard, RichText, Row, Title } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";

import * as S from "./styles";

export interface ITask {
  numberTasks: number;
  title: string;
}

export interface AccountTaskInformationProps {
  tasks: ITask[];
}

const AccountTaskInformation = ({ tasks }: AccountTaskInformationProps) => {
  return (
    <S.AccountTask>
      <Section title="Mis tareas" backgroundSection="transparent">
        <Row>
          {tasks.map(({ title, numberTasks }: ITask, index: number) => (
            <S.TaskItem key={index}>
              <FeaturedCard
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
