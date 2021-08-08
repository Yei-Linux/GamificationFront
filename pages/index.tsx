import React from "react";
import BannerMySections from "../app/components/home/BannerMySections";
import FeaturedStudents from "../app/components/home/FeaturedStudents";
import IdeasAndProjects from "../app/components/home/IdeasAndProjetcts";
import MyActivities from "../app/components/home/MyActivities";

import WithLayout from "../hoc/WithLayout";

const Home = () => {
  return (
    <div>
      <BannerMySections />
      <IdeasAndProjects />
      <FeaturedStudents />
      <MyActivities />
    </div>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Home);
