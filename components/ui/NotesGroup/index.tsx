import { Note } from "gamification-library";
import React from "react";
import { useArray } from "../../../hooks/useArray";

import dynamic from "next/dynamic";
const NotesUI = dynamic(() => import("../NotesUI"), {
  ssr: false,
});

import { NotesUIBasicProps } from "../NotesUI";
import { NotesGroupWrapper } from "./style";

export interface NotesGroupProps {}

const NotesGroup = () => {
  const { value: notes, setValue: setNotes, add, removeById } = useArray([]);

  const handleChangeNote = (
    field: string,
    value: unknown,
    id: string | number
  ) => {
    const notesToUpdate = [...notes];

    notesToUpdate.forEach((note: NotesUIBasicProps) => {
      if (note?.id == id) {
        note = {
          ...note,
          [field]: value,
        };
      }
    });

    setNotes(notesToUpdate);
  };

  return (
    <NotesGroupWrapper>
      <Note.NotesLayout>
        {notes?.map((note: NotesUIBasicProps, index: number) => (
          <NotesUI
            onChangeTitle={(value: string) =>
              handleChangeNote("title", value, index)
            }
            onChange={(value: string) => handleChangeNote("text", value, index)}
            key={index}
            id={index}
            title={note.title}
            text={note.title}
            onDelete={(value: number | string) => removeById(value)}
          />
        ))}
      </Note.NotesLayout>

      <Note.NoteAdd
        onAddNote={() =>
          add({
            id: notes?.lenght,
            title: "",
            text: "",
          })
        }
      />
    </NotesGroupWrapper>
  );
};

export default NotesGroup;
