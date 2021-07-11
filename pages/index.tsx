import React from "react";

import BannerMySections from "../components/BannerMySections";
import SectionFeaturedStudents from "../components/SectionFeaturedStudents";
import SectionMyActivities from "../components/SectionMyActivities";
import SectionIdeasAndProjects from "../components/SectionIdeasAndProjects";

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
