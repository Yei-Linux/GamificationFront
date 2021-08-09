import React from "react";
import PageDetail from "../app/components/commons/PageDetail";
import CourseDetail from "../app/components/courses/CourseDetail";
import { DUMMY_THEME_COURSES } from "../app/dummy/courses";
import { useArray } from "../app/hooks/useArray";
import WithLayout from "../hoc/WithLayout";

const Courses = () => {
  const { value: themeCourses } = useArray(DUMMY_THEME_COURSES);

  return (
    <PageDetail
      spacerSize={1}
      detailButtonText="All Themes"
      title="My Courses"
      items={themeCourses}
      listTitle="Themes"
      listButtonText="View"
    >
      <CourseDetail />
    </PageDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Courses);
