import { Note } from "gamification-library";
import React from "react";
import { NotesUIWrapper } from "./styles";

export interface NotesUIBasicProps {
  id: string | number;
  title?: string;
  text?: string;
}

type IEventNote = (value: string) => void;
type ISaveEditNote = (value: NotesUIBasicProps) => void;
type IDeleteNote = (value: number | string) => void;

export interface NotesUIProps extends NotesUIBasicProps {
  onChangeTitle: IEventNote;
  onChange: IEventNote;
  onSave?: ISaveEditNote;
  onEdit?: ISaveEditNote;
  onDelete: IDeleteNote;
}

const NotesUI = ({
  id,
  title,
  text,
  onChangeTitle,
  onChange,
  onDelete,
}: NotesUIProps) => {
  return (
    <NotesUIWrapper>
      <Note
        titleDefaultValue={title}
        onChangeTitle={onChangeTitle}
        defaultValue={text}
        onChange={onChange}
        onDelete={() => onDelete(id)}
      />
    </NotesUIWrapper>
  );
};

export default NotesUI;
