import React from "react";
import PageDetail from "../../app/components/commons/PageDetail";
import { DUMMY_THEME_NOTES } from "../../app/dummy/notes";
import { useArray } from "../../app/hooks/useArray";
import WithLayout from "../../hoc/WithLayout";

const Notes = () => {
  const { value: themeNotes } = useArray(DUMMY_THEME_NOTES);

  return (
    <PageDetail
      detailButtonText="Notes by Topics"
      prefixUrl="/notes"
      items={themeNotes}
      listTitle="Notes by Topics"
      listButtonText="View"
    >
      {null}
    </PageDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Notes);
