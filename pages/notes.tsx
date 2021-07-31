import styled from "@emotion/styled";
import React from "react";
import NotesContent from "../components/NotesContent";
import WithLayout from "../hoc/WithLayout";

const NotesWrapper = styled.div``;

const Notes = () => {
  return (
    <NotesWrapper>
      <NotesContent />
    </NotesWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Notes);
