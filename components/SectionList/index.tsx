import React from "react";
import SectionListItem from "../SectionListItem";
import { SectionListWrapper } from "./styles";

export interface SectionListProps {}

const SectionList = ({}: SectionListProps) => {
  return (
    <SectionListWrapper>
      <SectionListItem />
      <SectionListItem />
      <SectionListItem />
    </SectionListWrapper>
  );
};

export default SectionList;
