import { Col, Row } from "gamification-library";
import React from "react";
import AccountAchieves from "../components/AccountAchieves";
import AccountInformation from "../components/AccountInformation";
import WithLayout from "../hoc/WithLayout";

const Account = () => {
  return (
    <div>
      <Row>
        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <AccountInformation />
        </Col>

        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <AccountAchieves />
        </Col>
      </Row>
    </div>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Account);
