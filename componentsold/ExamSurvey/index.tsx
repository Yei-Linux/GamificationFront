import { Survey } from "gamification-library";
import React, { Fragment, useState } from "react";
import { EXAM__QUESTIONS } from "../../data/mocks";
import ClassInstruction from "../ClassInstruction";
import { ExamSurveyWrapper } from "./styles";

export interface ExamSurveyProps {}

const ExamSurvey = ({}: ExamSurveyProps) => {
  const [questions] = useState(EXAM__QUESTIONS);

  return (
    <Fragment>
      <ClassInstruction />

      <ExamSurveyWrapper>
        <Survey onFinish={() => {}}>
          {questions.map((question: any, index: number) => (
            <Survey.Item
              questionIndex={index}
              question={question.question}
              option={question.option}
              key={index}
              isLastQuestion={index === questions.length - 1}
            />
          ))}
        </Survey>
      </ExamSurveyWrapper>
    </Fragment>
  );
};

export default ExamSurvey;
