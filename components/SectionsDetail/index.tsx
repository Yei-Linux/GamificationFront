import { Title } from "gamification-library";
import React from "react";
import TitleSection from "../../layouts/TitleSection";
import { TitleContainer } from "../MySections/styles";
import SectionList from "../SectionList";
import {
  SectionDetailItem,
  SectionsDetailContainer,
  SectionsDetailWrapper,
} from "./styles";

export interface SectionsDetailProps {}

const SectionsDetail = ({}: SectionsDetailProps) => {
  return (
    <SectionsDetailWrapper>
      <TitleContainer>
        <Title level="h2">Mis secciones</Title>
      </TitleContainer>

      <SectionsDetailContainer>
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
      </SectionsDetailContainer>
    </SectionsDetailWrapper>
  );
};

export default SectionsDetail;
