import styled from "@emotion/styled";
import React from "react";
import ExamSurvey from "../components/ExamSurvey";
import WithLayout from "../hoc/WithLayout";

const ExamWrapper = styled.div``;

const Exam = () => {
  return (
    <ExamWrapper>
      <ExamSurvey />
    </ExamWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Exam);
