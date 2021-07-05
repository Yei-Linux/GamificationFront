import React from "react";
import MySections from "../components/MySections";
import WithLayout from "../hoc/WithLayout";
import TitleSection from "../layouts/TitleSection";

const Home = () => {
  return (
    <div>
      <MySections />
      <TitleSection text="Mis clases" iconId="book" />
      <TitleSection text="Mis apuntes" iconId="postit" />
      <TitleSection text="Ponte a prueba" iconId="rocket" />
      <TitleSection text="Mis dudas" iconId="question" />
    </div>
  );
};

export default WithLayout({ hasHeader: true })(Home);
