import { Tab } from "gamification-library";
import React from "react";
import ChallengeProblem from "./ChallengeProblem";
import ChallengeSolution from "./ChallengeSolution";
import * as S from "./styles";

const ChallengeDetail = () => {
  return (
    <S.ChallengeDetail>
      <Tab defaultActiveTab="problem">
        <Tab.List>
          <Tab.ListItem label="Problem" tabId="problem" />
          <Tab.ListItem label="Solution" tabId="solution" />
        </Tab.List>
        <Tab.Content>
          <Tab.ContentItem tabId="problem">
            <ChallengeProblem />
          </Tab.ContentItem>
          <Tab.ContentItem tabId="solution">
            <ChallengeSolution />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </S.ChallengeDetail>
  );
};

export default ChallengeDetail;
