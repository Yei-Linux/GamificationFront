import { Row } from "@gamiui/standard";
import React from "react";
import { DUMMY__FEATURED__STUDENTS } from "../../../dummy/home";
import { useArray } from "../../../hooks/useArray";
import Section from "../../layouts/Section";
import FeaturedStudentItem, {
  IFeaturedStudentItem,
} from "./FeaturedStudentItem";

const FeaturedStudents = () => {
  const { value: featuredStudents } = useArray(DUMMY__FEATURED__STUDENTS);

  return (
    <Section title="Featured Users" backgroundSection="#f2f6ff">
      <Row>
        {featuredStudents.map(
          (
            { id, userName, lvlDetails, avatar }: IFeaturedStudentItem,
            index: number
          ) => (
            <FeaturedStudentItem
              key={index}
              id={id}
              userName={userName}
              lvlDetails={lvlDetails}
              avatar={avatar}
            />
          )
        )}
      </Row>
    </Section>
  );
};

export default FeaturedStudents;
