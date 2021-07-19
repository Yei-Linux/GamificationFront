import styled from "@emotion/styled";
import { Row } from "gamification-library";
import React, { Fragment } from "react";
import ClassAchievements from "../components/ClassAchievements";
import ClassInformationHeader from "../components/ClassInformationHeader";
import ClassVideo from "../components/ClassVideo";

import WithLayout from "../hoc/WithLayout";

export interface ClassProps {}

const ClassInformationContainer = styled.div``;

const ClassContentContainer = styled.div``;

const Class = ({}: ClassProps) => {
  return (
    <Fragment>
      <Row justifyContent="space-around">
        <ClassInformationContainer>
          <ClassInformationHeader />
          <ClassAchievements />
        </ClassInformationContainer>
        <ClassContentContainer>
          <ClassVideo />
        </ClassContentContainer>
      </Row>
    </Fragment>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Class);
