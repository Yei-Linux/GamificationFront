import React from "react";
import MySections from "../components/MySections";
import SectionsDetail from "../components/SectionsDetail";
import WithLayout from "../hoc/WithLayout";

const Home = () => {
  return (
    <div>
      <MySections />
      <SectionsDetail />
    </div>
  );
};

export default WithLayout({ hasHeader: true })(Home);
