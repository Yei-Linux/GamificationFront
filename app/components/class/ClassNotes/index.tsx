import React from "react";
import { themeCustom } from "../../../../styles/theme";
import { INoteItemGeneralProps } from "../../../types/notes";
import NotesGroup from "../../commons/NotesGroup";
import TitleSection from "../../layouts/TitleSection";

import * as S from "./styles";

export interface IClassNotesProps {
  notes: INoteItemGeneralProps[];
}

const ClassNotes = ({notes} : IClassNotesProps) => {
  return (
    <S.ClassNotes>
      <S.Title>
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level="h2"
          text="Classroom Notes"
        />
      </S.Title>
      <NotesGroup notes={notes} />
    </S.ClassNotes>
  );
};

export default ClassNotes;
