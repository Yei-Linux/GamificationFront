import { Floating, GuideMessage, Note } from "gamification-library";
import React, { useState } from "react";
import { useArray } from "../../../hooks/useArray";

import dynamic from "next/dynamic";
const NotesUI = dynamic(() => import("../NotesUI"), {
  ssr: false,
});

import { NotesUIBasicProps } from "../NotesUI";
import { NotesGroupWrapper } from "./style";

export interface NotesGroupProps {}

const NotesGroup = () => {
  const [visible, setIsVisible] = useState(false);

  const [noteIdOnCreation, setNoteIdOnCreation] = useState<
    string | number | null
  >(null);
  const [isCreateNewOrEditOne, setIsCreateNewOrEditOne] = useState(false);
  const { value: notes, add, removeById, updateItemByField } = useArray([]);

  const toggleVisible = () => setIsVisible(!visible);

  const toggleCreatedOrEditNote = (): void => setIsCreateNewOrEditOne(true);

  const toggleFinishOnCreatedOrEditNote = (): void =>
    setIsCreateNewOrEditOne(false);

  const toggleUpAndSetNoteId = (id: number | string) => {
    setNoteIdOnCreation(id);
    toggleCreatedOrEditNote();
  };

  const handleChangeNote = (
    field: string,
    value: unknown,
    id: string | number
  ) => {
    updateItemByField("id", id, field, value);
  };

  const handleDeleteNote = (id: number | string): void => {
    noteIdOnCreation == id && toggleFinishOnCreatedOrEditNote();
    removeById(id);
  };

  const handleAddNote = (): void => {
    if (isCreateNewOrEditOne) {
      !visible && toggleVisible();
      return;
    }

    toggleUpAndSetNoteId(notes?.length);
    add({
      id: notes?.length,
      title: "",
      text: "",
    });
  };

  return (
    <NotesGroupWrapper>
      <Note.NotesLayout>
        {notes?.map((note: NotesUIBasicProps, index: number) => (
          <NotesUI
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

      <Note.NoteAdd onAddNote={handleAddNote} />

      <Floating direction="top" visible={visible} onClose={toggleVisible}>
        <GuideMessage
          guideType="worried"
          message="Debes de guardar tu nota para crear una nueva!"
          direction="right"
          background="#ff75a0"
        />
      </Floating>
    </NotesGroupWrapper>
  );
};

export default NotesGroup;
