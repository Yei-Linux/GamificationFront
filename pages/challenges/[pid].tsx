import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import ChallengeDetail from "../../app/components/challenge/ChallengeDetail";
import ChallengeInfo from "../../app/components/challenge/ChallengeInfo";
import WithLayout from "../../hoc/WithLayout";

import { Icon, Link as CustomLink } from "@gamiui/standard";
import classNames from "classnames";

const ChallengeWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  height: 100%;
`;

const ChallengeLink = styled.div`
  width: 100%;

  .challenge__link {
    text-decoration: underline;
  }
`;

const ChallengeViewAll = styled.div`
  margin: 1rem 0;
`;

const Challenge = () => {
  return (
    <ChallengeWrapper>
      <ChallengeViewAll>
        <ChallengeLink className={classNames("flex")}>
          <Icon name="arrow__left" />
          <Link href="/challenges" passHref>
            <CustomLink
              text="View All Challenges"
              className={classNames("challenge__link")}
              href="/challenges"
            />
          </Link>
        </ChallengeLink>
      </ChallengeViewAll>

      <ChallengeInfo />
      <ChallengeDetail />
    </ChallengeWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Challenge);
