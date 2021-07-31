import styled from "@emotion/styled";
import { mediaQuery } from "gamification-library";

export const NotesContentWrapper = styled.div``;

export const NotesContentTitle = styled.div`
  margin: 1rem 0 5rem 0;
`;

export const NotesContainer = styled.div`
  padding: 1rem;
`;

export const NotesViewAllButton = styled.div`
  display: block;

  ${mediaQuery("md")} {
    display: none;
  }
`;

export const NotesSiderBarContainer = styled.div`
  padding: 1rem;
`;
