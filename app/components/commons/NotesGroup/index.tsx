import { Empty, Floating, GuideMessage, Note } from "gamification-library";
import React from "react";
import * as S from "./styles";

import dynamic from "next/dynamic";
import { INoteItemGeneralProps } from "../../../types/notes";
import { useNotes } from "../../../hooks/useNotes";
const NotesItem = dynamic(() => import("./NoteItem"), {
  ssr: false,
});

export interface INotesGroup {
  notes: INoteItemGeneralProps[];
}

const NotesGroup = ({ notes }: INotesGroup) => {
  const {
    isEmptyNote,
    handleAddNote,
    visible,
    toggleVisible,
    notesItems,
    toggleFinishOnCreatedOrEditNote,
    toggleUpAndSetNoteId,
    handleChangeNote,
    handleDeleteNote,
  } = useNotes({ notes });

  return (
    <S.NotesGroup>
      {isEmptyNote() ? (
        <Empty />
      ) : (
        <Note.NotesLayout>
          {notesItems?.map(
            ({ id, title, description }: INoteItemGeneralProps, index: number) => (
              <NotesItem
                onSave={toggleFinishOnCreatedOrEditNote}
                onEdit={() => toggleUpAndSetNoteId(id)}
                onChangeTitle={(value: string) =>
                  handleChangeNote("title", value, id)
                }
                onChange={(value: string) =>
                  handleChangeNote("text", value, id)
                }
                key={index}
                id={id}
                title={title}
                description={description}
                onDelete={handleDeleteNote}
              />
            )
          )}
        </Note.NotesLayout>
      )}

      <S.NotesAdd>
        <Note.NoteAdd onAddNote={handleAddNote} />
      </S.NotesAdd>

      <Floating direction="top" visible={visible} onClose={toggleVisible}>
        <GuideMessage
          guideType="worried"
          message="Debes de guardar tu nota para crear una nueva!"
          direction="right"
          background="#ff75a0"
        />
      </Floating>
    </S.NotesGroup>
  );
};

export default NotesGroup;
