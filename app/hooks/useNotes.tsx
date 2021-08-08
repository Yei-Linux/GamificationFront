import { useState } from "react";
import { useArray } from "./useArray";

export const useNotes = () => {
  const [visible, setIsVisible] = useState(false);
  const [isCreateNewOrEditOne, setIsCreateNewOrEditOne] = useState(false);

  const [noteIdOnCreation, setNoteIdOnCreation] = useState<
    string | number | null
  >(null);

  const {
    value: notes,
    add,
    removeById,
    updateItemByField,
    isEmpty,
  } = useArray([]);

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

    toggleUpAndSetNoteId(notes?.length);
    add({
      id: notes?.length,
      title: "",
      text: "",
    });
  };

  return {
    notes,
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
