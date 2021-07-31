import styled from "@emotion/styled";
import { Col, mediaQuery, Row } from "gamification-library";
import React from "react";
import NotesContent from "../components/NotesContent";
import NotesSiderBar from "../components/NotesSideBar";
import WithLayout from "../hoc/WithLayout";

const NotesWrapper = styled.div`
  padding: 2rem;

  ${mediaQuery("md")} {
    padding: 5rem;
  }
`;

const NotesSiderBarCondition = styled.div`
  display: none;

  ${mediaQuery("md")} {
    display: block;
  }
`;

const Notes = () => {
  return (
    <NotesWrapper>
      <Row alignItems="flex-start">
        <Col spacing="md" xs={12} sm={12} md={8} lg={8}>
          <NotesContent />
        </Col>

        <Col spacing="md" xs={12} sm={12} md={4} lg={4}>
          <NotesSiderBarCondition>
            <NotesSiderBar />
          </NotesSiderBarCondition>
        </Col>
      </Row>
    </NotesWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Notes);
