import React from "react";
import MySections from "../components/MySections";
import OutstadingStudent from "../components/FeaturedStudents";
import SectionsDetail from "../components/SectionsDetail";
import WithLayout from "../hoc/WithLayout";
import IdeasAndProjects from "../components/IdeasAndProjects";

const Home = () => {
  return (
    <div>
      <MySections />
      <IdeasAndProjects />
      <OutstadingStudent />
      <SectionsDetail />
    </div>
  );
};

export default WithLayout({ hasHeader: true })(Home);
