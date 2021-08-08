import { Row } from "gamification-library";
import React from "react";
import { useArray } from "../../../hooks/useArray";
import Section from "../../layouts/Section";
import FeaturedStudentItem, {
  IFeaturedStudentItem,
} from "./FeaturedStudentItem";

const FeaturedStudents = () => {
  const { value: featuredStudents } = useArray([]);

  return (
    <Section backgroundSection="#f2f6ff">
      <Row>
        {featuredStudents.map(
          (
            { title, description, buttonText, avatar }: IFeaturedStudentItem,
            index: number
          ) => (
            <FeaturedStudentItem
              key={index}
              title={title}
              description={description}
              buttonText={buttonText}
              avatar={avatar}
            />
          )
        )}
      </Row>
    </Section>
  );
};

export default FeaturedStudents;
