import { useState } from "react";
import { INoteItemGeneralProps } from "../types/notes";
import { useArray } from "./useArray";

export interface IUseNotes{
  notes : INoteItemGeneralProps[]
}

export const useNotes = ({notes} : IUseNotes) => {
  const [visible, setIsVisible] = useState(false);
  const [isCreateNewOrEditOne, setIsCreateNewOrEditOne] = useState(false);

  const [noteIdOnCreation, setNoteIdOnCreation] = useState<
    string | number | null
  >(null);

  const {
    value: notesItems,
    add,
    removeById,
    updateItemByField,
    isEmpty,
  } = useArray(notes);

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
  ) => updateItemByField("id", id, field, value);

  const handleDeleteNote = (id: number | string): void => {
    noteIdOnCreation == id && toggleFinishOnCreatedOrEditNote();
    removeById(id);
  };

  const handleAddNote = (): void => {
    if (isCreateNewOrEditOne) {
      !visible && toggleVisible();
      return;
    }

    toggleUpAndSetNoteId(notesItems?.length);
    add({
      id: notesItems?.length,
      title: "",
      text: "",
    });
  };

  return {
    notesItems,
    isEmptyNote: isEmpty,
    visible,
    toggleVisible,
    toggleFinishOnCreatedOrEditNote,
    toggleUpAndSetNoteId,
    handleChangeNote,
    handleDeleteNote,
    handleAddNote,
  };
};
