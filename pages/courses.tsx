import React from "react";
import CourseDetail from "../components/CourseDetail";
import WithLayout from "../hoc/WithLayout";
import ListWithDetail from "../layouts/ListWithDetail";

const Courses = () => {
  return (
    <ListWithDetail>
      <CourseDetail description="This course is about introduction on javascript world with many resources for you to improve your skills" />
    </ListWithDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Courses);
