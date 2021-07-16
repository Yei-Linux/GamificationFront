import styled from "@emotion/styled";
import { Col, mediaQuery, Row } from "gamification-library";
import React from "react";
import AccountGameInformation from "../components/AccountGameInformation";
import AccountInformation from "../components/AccountInformation";
import AccountScorePosition from "../components/AccountScorePosition";
import AccountTaskInformation from "../components/AccountTaskInformation";
import WithLayout from "../hoc/WithLayout";
import { GridSection } from "../styles/utilities/display";

const AchievesContainer = styled.div`
  margin: auto;
  ${GridSection("auto-fit", "minmax(25rem, 1fr)")}

  ${mediaQuery("lg")} {
    width: 80%;
  }
`;

const Account = () => {
  return (
    <div>
      <Row>
        <Col spacing="none" xs={12} sm={12} md={12} lg={12}>
          <AccountInformation />
        </Col>

        <Col spacing="none" xs={12} sm={12} md={12} lg={12}>
          <Row>
            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <AccountTaskInformation />
            </Col>

            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <AchievesContainer>
                <AccountGameInformation />
                <AccountScorePosition />
              </AchievesContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Account);
