import styled from "@emotion/styled";
import { Col, mediaQuery, Row } from "gamification-library";
import React, { useState } from "react";
import AccountGameInformation from "../../app/components/account/AccountGameInformation";
import AccountInformation from "../../app/components/account/AccountInformation";
import AccountScorePosition from "../../app/components/account/AccountScorePosition";
import AccountTaskInformation from "../../app/components/account/AccountTaskInformation";
import { DUMMY__ACCOUNT__INFORMATION } from "../../app/dummy/account";
import WithLayout from "../../hoc/WithLayout";
import { GridSection } from "../../styles/utilities/display";

const AchievesContainer = styled.div`
  margin: auto;
  ${GridSection("auto-fit", "minmax(25rem, 1fr)")}

  ${mediaQuery("lg")} {
    width: 80%;
  }
`;

const Account = () => {
  const [
    {
      account: {
        photo,
        userName,
        role,
        lvl,
        scorePercentBar,
        score,
        scoreToNextLvl,
        socialNetworks,
      },
      metrics,
      skills,
      badges,
      userPositions,
    },
  ] = useState(DUMMY__ACCOUNT__INFORMATION);

  return (
    <div>
      <Row>
        <Col spacing="none" xs={12} sm={12} md={12} lg={12}>
          <AccountInformation
            photo={photo}
            lvl={lvl}
            userName={userName}
            role={role}
            scorePercentBar={scorePercentBar}
            score={score}
            scoreToNextLvl={scoreToNextLvl}
            socialNetworks={socialNetworks}
          />
        </Col>

        <Col spacing="none" xs={12} sm={12} md={12} lg={12}>
          <Row>
            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <AccountTaskInformation metrics={metrics} />
            </Col>

            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <AchievesContainer>
                <AccountGameInformation skills={skills} badges={badges} />
                <AccountScorePosition userPositions={userPositions} />
              </AchievesContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Account);
