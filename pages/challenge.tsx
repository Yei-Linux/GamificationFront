import styled from "@emotion/styled";
import React from "react";
import ChallengeDetail from "../app/components/challenge/ChallengeDetail";
import ChallengeInfo from "../app/components/challenge/ChallengeInfo";
import WithLayout from "../hoc/WithLayout";
const ChallengeWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  height: 100%;
`;

const Challenge = () => {
  return (
    <ChallengeWrapper>
      <ChallengeInfo />
      <ChallengeDetail />
    </ChallengeWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Challenge);
