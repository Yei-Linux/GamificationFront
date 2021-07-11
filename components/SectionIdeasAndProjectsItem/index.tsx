import { Title, FeaturedCard, RichText } from "gamification-library";
import React from "react";
import { SectionIdeasAndProjectsItemWrapper } from "./styles";

export interface SectionIdeasAndProjectsItemProps {}

const SectionIdeasAndProjectsItem = ({}: SectionIdeasAndProjectsItemProps) => {
  return (
    <SectionIdeasAndProjectsItemWrapper>
      <FeaturedCard
        text={
          <div>
            <Title level="h3">Title</Title>
            <RichText text="Description" />
          </div>
        }
      />
    </SectionIdeasAndProjectsItemWrapper>
  );
};

export default SectionIdeasAndProjectsItem;
