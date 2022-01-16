import { Tab } from "@gamiui/standard";
import React from "react";
import ChallengeProblem from "./ChallengeProblem";
import ChallengeSolution from "./ChallengeSolution";
import * as S from "./styles";

const ChallengeDetail = () => {
  return (
    <S.ChallengeDetail>
      <Tab defaultActiveTab="problem" width="100%">
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
