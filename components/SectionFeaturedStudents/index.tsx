import { Row } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";
import SectionFeaturedStudentsItem from "../SectionFeaturedStudentsItem";

export interface SectionFeaturedStudentsProps {}

const SectionFeaturedStudents = ({}: SectionFeaturedStudentsProps) => {
  return (
    <Section backgroundSection="#f2f6ff">
      <Row>
        <SectionFeaturedStudentsItem />

        <SectionFeaturedStudentsItem />

        <SectionFeaturedStudentsItem />
      </Row>
    </Section>
  );
};

export default SectionFeaturedStudents;
