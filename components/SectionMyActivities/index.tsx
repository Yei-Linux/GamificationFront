import React from "react";
import Section from "../../layouts/Section";
import TitleSection from "../../layouts/TitleSection";
import SectionList from "../SectionMyActivityList";
import { SectionDetailItem, SectionMyActivitiesContainer } from "./styles";

export interface SectionMyActivitiesProps {}

const SectionMyActivities = ({}: SectionMyActivitiesProps) => {
  return (
    <Section>
      <SectionMyActivitiesContainer>
        <SectionDetailItem>
          <TitleSection text="Mis clases" iconId="book" />
          <SectionList />
        </SectionDetailItem>

        <SectionDetailItem>
          <TitleSection text="Mis apuntes" iconId="postit" />
          <SectionList />
        </SectionDetailItem>

        <SectionDetailItem>
          <TitleSection text="Ponte a prueba" iconId="rocket" />
          <SectionList />
        </SectionDetailItem>

        <SectionDetailItem>
          <TitleSection text="Mis dudas" iconId="question" />
          <SectionList />
        </SectionDetailItem>
      </SectionMyActivitiesContainer>
    </Section>
  );
};

export default SectionMyActivities;
