import React from "react";
import NotesGroup from "../app/components/commons/NotesGroup";
import PageDetail from "../app/components/commons/PageDetail";
import { DUMMY_CLASS_NOTES, DUMMY_THEME_NOTES } from "../app/dummy/notes";
import { useArray } from "../app/hooks/useArray";
import WithLayout from "../hoc/WithLayout";

const Notes = () => {
  const { value: notes } = useArray(DUMMY_CLASS_NOTES);
  const { value: themeNotes } = useArray(DUMMY_THEME_NOTES);

  return (
    <PageDetail
      detailButtonText="All Themes"
      title="My Notes"
      items={themeNotes}
      listTitle="Themes"
      listButtonText="View"
    >
      <NotesGroup notes={notes} />
    </PageDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Notes);
