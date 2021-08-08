import styled from "@emotion/styled";
import { Row } from "gamification-library";
import React, { Fragment } from "react";
import ClassChat from "../componentsold/ClassChat";
import ClassDetails from "../componentsold/ClassDetails";
import ClassInstruction from "../componentsold/ClassInstruction";
import ClassNotes from "../componentsold/ClassNotes";
import ClassVideo from "../componentsold/ClassVideo";

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
      <ClassInstruction/>
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
