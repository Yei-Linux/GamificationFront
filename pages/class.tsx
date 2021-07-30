import styled from "@emotion/styled";
import { Row } from "gamification-library";
import React, { Fragment } from "react";
import ClassChat from "../components/ClassChat";
import ClassDetails from "../components/ClassDetails";
import ClassNotes from "../components/ClassNotes";
import ClassVideo from "../components/ClassVideo";

import WithLayout from "../hoc/WithLayout";

export interface ClassProps {}

const ClassInformationContainer = styled.div`
  padding: 1rem;
`;

const ClassContentContainer = styled.div`
  padding: 1rem;
`;

const Class = ({}: ClassProps) => {
  return (
    <Fragment>
      <Row justifyContent="space-around" alignItems="flex-start">
        <ClassInformationContainer>
          <ClassDetails />
          <ClassNotes />
        </ClassInformationContainer>
        <ClassContentContainer>
          <ClassVideo />
          <ClassChat />
        </ClassContentContainer>
      </Row>
    </Fragment>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Class);
