import React from "react";
import NotesGroup from "../components/ui/NotesGroup";
import WithLayout from "../hoc/WithLayout";
import ListWithDetail from "../layouts/ListWithDetail";

const Notes = () => {
  return (
    <ListWithDetail>
      <NotesGroup />
    </ListWithDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Notes);
