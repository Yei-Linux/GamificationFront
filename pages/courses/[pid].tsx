import React, { useState } from "react";
import PageDetail from "../../app/components/commons/PageDetail";
import CourseDetail, {
  ICourseDetail,
} from "../../app/components/courses/CourseDetail";
import {
  DUMMY_COURSE_DETAIL,
  DUMMY_THEME_COURSES,
} from "../../app/dummy/courses";
import { useArray } from "../../app/hooks/useArray";
import WithLayout from "../../hoc/WithLayout";

const Courses = () => {
  const { value: themeCourses } = useArray(DUMMY_THEME_COURSES);

  const [{ title, description, tutor, achievements, summaries }] = useState<
    ICourseDetail
  >(DUMMY_COURSE_DETAIL);

  return (
    <PageDetail
      spacerSize={1}
      detailButtonText="All Courses"
      title={title ?? ""}
      items={themeCourses}
      listTitle="Courses"
      listButtonText="View"
      prefixUrl="/courses"
    >
      <CourseDetail
        description={description}
        tutor={tutor}
        achievements={achievements}
        summaries={summaries}
      />
    </PageDetail>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Courses);
