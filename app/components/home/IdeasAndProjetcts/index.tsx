import { Row } from "gamification-library";
import React from "react";
import { DUMMY__IDEAS__AND__PROJECT } from "../../../dummy/home";
import { useArray } from "../../../hooks/useArray";
import Section from "../../layouts/Section";
import IdeasAndProjectsItem, {
  IIdeasAndProjectsItem,
} from "./IdeasAndProjectsItem";

export interface IIdeasAndProjects {}

const IdeasAndProjects = ({}: IIdeasAndProjects) => {
  const { value: ideasItems } = useArray(DUMMY__IDEAS__AND__PROJECT);

  return (
    <Section title="Interesting Metrics">
      <Row>
        {ideasItems.map(
          ({ title, description }: IIdeasAndProjectsItem, index: number) => (
            <IdeasAndProjectsItem
              key={index}
              title={title}
              description={description}
            />
          )
        )}
      </Row>
    </Section>
  );
};

export default IdeasAndProjects;
