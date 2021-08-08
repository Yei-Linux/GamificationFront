import { Empty, Floating, GuideMessage, Note } from "gamification-library";
import React from "react";
import * as S from "./styles";

import dynamic from "next/dynamic";
import { INoteItemGeneralProps } from "../../../types/notes";
import { useNotes } from "../../../hooks/useNotes";
const NotesItem = dynamic(() => import("./NoteItem"), {
  ssr: false,
});

const NotesGroup = () => {
  const {
    isEmptyNote,
    handleAddNote,
    visible,
    toggleVisible,
    notes,
    toggleFinishOnCreatedOrEditNote,
    toggleUpAndSetNoteId,
    handleChangeNote,
    handleDeleteNote,
  } = useNotes();

  return (
    <S.NotesGroup>
      {isEmptyNote() ? (
        <Empty />
      ) : (
        <Note.NotesLayout>
          {notes?.map((note: INoteItemGeneralProps, index: number) => (
            <NotesItem
              onSave={toggleFinishOnCreatedOrEditNote}
              onEdit={() => toggleUpAndSetNoteId(note?.id)}
              onChangeTitle={(value: string) =>
                handleChangeNote("title", value, note?.id)
              }
              onChange={(value: string) =>
                handleChangeNote("text", value, note?.id)
              }
              key={index}
              id={note.id}
              title={note.title}
              text={note.text}
              onDelete={handleDeleteNote}
            />
          ))}
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
