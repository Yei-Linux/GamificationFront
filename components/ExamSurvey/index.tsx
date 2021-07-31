import { Survey } from "gamification-library";
import React, { useState } from "react";
import { EXAM__QUESTIONS } from "../../data/mocks";
import { ExamSurveyWrapper } from "./styles";

export interface ExamSurveyProps {}

const ExamSurvey = ({}: ExamSurveyProps) => {
  const [questions] = useState(EXAM__QUESTIONS);

  return (
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
  );
};

export default ExamSurvey;
