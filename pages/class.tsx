import React, { Fragment } from "react";
import ClassAchievements from "../components/ClassAchievements";
import ClassInformationHeader from "../components/ClassInformationHeader";

import WithLayout from "../hoc/WithLayout";

export interface ClassProps {}

const Class = ({}: ClassProps) => {
  return (
    <Fragment>
      <div>
        <ClassInformationHeader />
        <ClassAchievements />
      </div>
    </Fragment>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Class);
