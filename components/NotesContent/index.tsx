import React from "react";
import TitleDefault from "../../layouts/TitleDefault";
import { themeCustom } from "../../styles/theme";
import NotesGroup from "../ui/NotesGroup";
import { NotesContainer, NotesContentTitle, NotesContentWrapper } from "./styles";

export interface NotesContentProps {}

const NotesContent = ({}: NotesContentProps) => {
  return (
    <NotesContentWrapper>
      <NotesContentTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text="Classroom Chat"
        />
      </NotesContentTitle>
      <NotesContainer>
          <NotesGroup/>
      </NotesContainer>
    </NotesContentWrapper>
  );
};

export default NotesContent;
