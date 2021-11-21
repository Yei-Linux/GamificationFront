import styled from "@emotion/styled";
import React from "react";
import ExamSurvey from "../../app/components/exam/ExamSurvey";
import { DUMMY__EXAM__QUESTIONS } from "../../app/dummy/exam";
import { useArray } from "../../app/hooks/useArray";
const ExamWrapper = styled.div``;

const Exam = () => {
  const { value: questions, lastIndexValue } = useArray(DUMMY__EXAM__QUESTIONS);

  return (
    <ExamWrapper>
      <ExamSurvey questions={questions} lastIndexValue={lastIndexValue()} />
    </ExamWrapper>
  );
};

export default Exam;
