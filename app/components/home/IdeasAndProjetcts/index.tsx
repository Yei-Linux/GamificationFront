import { Row } from "gamification-library";
import React from "react";
import { useArray } from "../../../hooks/useArray";
import Section from "../../layouts/Section";
import IdeasAndProjectsItem, {
  IIdeasAndProjectsItem,
} from "./IdeasAndProjectsItem";

export interface IIdeasAndProjects {}

const IdeasAndProjects = ({}: IIdeasAndProjects) => {
  const { value: ideasItems } = useArray([]);

  return (
    <Section>
      <Row>
        {ideasItems.map((item: IIdeasAndProjectsItem, index: number) => (
          <IdeasAndProjectsItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Row>
    </Section>
  );
};

export default IdeasAndProjects;
