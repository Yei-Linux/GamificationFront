import styled from "@emotion/styled";
import React from "react";
import MakeChallengeDetail from "../../app/components/challenge/MakeChallengeDetail";
import HighLightTitle from "../../app/components/layouts/HighLightTitle";
import WithLayout from "../../hoc/WithLayout";

const MakeChallengeWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  height: 100%;
`;

const MakeChallenge = () => {
  return (
    <MakeChallengeWrapper>
      <HighLightTitle
        title="Make your own challenge and share it 😈"
        level="h2"
      />
      <MakeChallengeDetail />
    </MakeChallengeWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(MakeChallenge);
