import { Survey } from "gamification-library";
import React, { Fragment, useState } from "react";
import { DUMMY_INSTRUCTIONS__EXAM } from "../../../dummy/instructions";
import { useArray } from "../../../hooks/useArray";
import { IQuestionSurvey } from "../../../types/exam";
import { IGeneralInstructionsItem } from "../../../types/instructions";
import Instructions from "../../commons/Instructions";

import * as S from "./styles";

export interface ExamSurveyProps {}

const ExamSurvey = ({}: ExamSurveyProps) => {
  const [isCloseSliding, setIsCloseSliding] = useState(false);

  const { value: questions, lastIndexValue } = useArray([]);
  const { value: instructions } = useArray(DUMMY_INSTRUCTIONS__EXAM);

  return (
    <Fragment>
      <Instructions isCloseSliding={isCloseSliding}>
        {instructions.map(
          (
            {
              mainTitle,
              subTitle,
              description,
              buttonText,
              src,
              hasButtonToFinish,
            }: IGeneralInstructionsItem,
            index: number
          ) => (
            <Instructions.Item
              key={index}
              mainTitle={mainTitle}
              subTitle={subTitle}
              description={description}
              buttonText={buttonText}
              src={src}
              hasButtonToFinish={hasButtonToFinish}
              onClickButtonToFinish={() =>
                hasButtonToFinish ? setIsCloseSliding(true) : {}
              }
            />
          )
        )}
      </Instructions>

      <S.ExamSurvey>
        <Survey onFinish={() => {}}>
          {questions.map(
            ({ question, option }: IQuestionSurvey, index: number) => (
              <Survey.Item
                key={index}
                questionIndex={index}
                question={question}
                option={option}
                isLastQuestion={index === lastIndexValue()}
              />
            )
          )}
        </Survey>
      </S.ExamSurvey>
    </Fragment>
  );
};

export default ExamSurvey;
