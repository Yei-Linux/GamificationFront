import React, { useState } from "react";
import NotesGroup from "../../app/components/commons/NotesGroup";
import PageDetail from "../../app/components/commons/PageDetail";
import { DUMMY_NOTES_BY_TOPIC, DUMMY_THEME_NOTES } from "../../app/dummy/notes";
import { useArray } from "../../app/hooks/useArray";
import WithLayout from "../../hoc/WithLayout";

const Notes = () => {
  const [noteByTopic] = useState(DUMMY_NOTES_BY_TOPIC);
  const { value: themeNotes } = useArray(DUMMY_THEME_NOTES);

  return (
    <PageDetail
      detailButtonText="Notes by Topics"
      title={noteByTopic.title}
      prefixUrl="/notes"
      items={themeNotes}
      listTitle="Notes by Topics"
      listButtonText="View"
    >
      <NotesGroup notes={noteByTopic.notes} />
    </PageDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Notes);
