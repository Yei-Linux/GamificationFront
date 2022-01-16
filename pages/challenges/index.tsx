import styled from "@emotion/styled";
import classNames from "classnames";
import { Icon, Link as CustomLink } from "@gamiui/standard";
import Link from "next/link";
import React from "react";
import ChallengesProblems from "../../app/components/challenge/ChallengesProblems";
import HighLightTitle from "../../app/components/layouts/HighLightTitle";
import { DUMMY__SAMPLE_ITEMS } from "../../app/dummy/challenge";
import WithLayout from "../../hoc/WithLayout";

const ChallengesWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  height: 100%;
`;

const ChallengesLink = styled.div`
  .challenges__link {
    text-decoration: underline;
  }
`;

const Challenges = () => {
  return (
    <ChallengesWrapper>
      <HighLightTitle
        title="Last challenges 😱"
        level="h2"
        rightHeader={
          <ChallengesLink className={classNames("flex")}>
            <Link href="/challenges/make" passHref>
              <CustomLink
                text="Make a challenge"
                className={classNames("challenges__link")}
                href="/challenges/make"
              />
            </Link>
            <Icon name="arrow__right" />
          </ChallengesLink>
        }
      />
      <ChallengesProblems challenges={DUMMY__SAMPLE_ITEMS} />
    </ChallengesWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Challenges);
