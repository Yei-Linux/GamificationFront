import { Row } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";
import SectionIdeasAndProjectsItem from "../SectionIdeasAndProjectsItem";

export interface SectionIdeasAndProjectsProps {}

const SectionIdeasAndProjects = ({}: SectionIdeasAndProjectsProps) => {
  return (
    <Section>
      <Row>
        <SectionIdeasAndProjectsItem />

        <SectionIdeasAndProjectsItem />

        <SectionIdeasAndProjectsItem />

        <SectionIdeasAndProjectsItem />
      </Row>
    </Section>
  );
};

export default SectionIdeasAndProjects;
