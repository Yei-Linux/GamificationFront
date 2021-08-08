import React from "react";
import TitleDefault from "../../app/components/layouts/TitleSection";
import { themeCustom } from "../../styles/theme";
import NotesGroup from "../ui/NotesGroup";
import { ClassNotesTitle, ClassNotesWrapper } from "./styles";

export interface ClassNotesProps {}

const ClassNotes = () => {
  return (
    <ClassNotesWrapper>
      <ClassNotesTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text="Classroom Notes"
        />
      </ClassNotesTitle>
      <NotesGroup />
    </ClassNotesWrapper>
  );
};

export default ClassNotes;
