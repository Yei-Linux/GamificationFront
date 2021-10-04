import { Note } from "gamification-library";
import React from "react";
import {
  IDeleteNote,
  IEventNote,
  INoteItemGeneralProps,
  ISaveEditNote,
} from "../../../types/notes";

import * as S from "./styles";

export interface INotesItemProps extends INoteItemGeneralProps {
  onChangeTitle: IEventNote;
  onChange: IEventNote;
  onSave?: ISaveEditNote;
  onEdit?: ISaveEditNote;
  onDelete: IDeleteNote;
}

const NotesItem = ({
  id,
  title,
  text,
  onChangeTitle,
  onSave,
  onEdit,
  onChange,
  onDelete,
}: INotesItemProps) => {
  return (
    <S.NoteItem>
      <Note
        titleDefaultValue={title || ""}
        onChangeTitle={onChangeTitle}
        defaultValue={text}
        onChange={onChange}
        onDelete={() => onDelete(id)}
        onSave={onSave}
        onEdit={onEdit}
      />
    </S.NoteItem>
  );
};

export default NotesItem;
