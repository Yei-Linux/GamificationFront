import { Row } from "@gamiui/standard";
import React from "react";
import { DUMMY__MY__COURSES } from "../../../dummy/home";
import { useArray } from "../../../hooks/useArray";
import Section from "../../layouts/Section";
import MyCourseItem, { IMyCourseItem } from "./MyCourseItem";

const MyCourses = () => {
  const { value: myCourses } = useArray(DUMMY__MY__COURSES);

  return (
    <Section title="My Courses" backgroundSection="#f2f6ff">
      <Row height="auto">
        {myCourses.map(
          ({ id, title, description, src }: IMyCourseItem, index: number) => (
            <MyCourseItem
              key={index}
              id={id}
              title={title}
              description={description}
              src={src}
            />
          )
        )}
      </Row>
    </Section>
  );
};

export default MyCourses;
