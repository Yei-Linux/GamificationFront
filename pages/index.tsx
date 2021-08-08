import React from "react";

import BannerMySections from "../componentsold/BannerMySections";
import SectionFeaturedStudents from "../componentsold/SectionFeaturedStudents";
import SectionMyActivities from "../componentsold/SectionMyActivities";
import SectionIdeasAndProjects from "../componentsold/SectionIdeasAndProjects";

import WithLayout from "../hoc/WithLayout";

const Home = () => {
  return (
    <div>
      <BannerMySections />
      <SectionIdeasAndProjects />
      <SectionFeaturedStudents />
      <SectionMyActivities />
    </div>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Home);
