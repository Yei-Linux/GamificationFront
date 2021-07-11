import React from "react";
import SectionMyActivityListItem from "../SectionMyActivityListItem";
import { SectionMyActivityListWrapper } from "./styles";

export interface SectionMyActivityListProps {}

const SectionMyActivityList = ({}: SectionMyActivityListProps) => {
  return (
    <SectionMyActivityListWrapper>
      <SectionMyActivityListItem />
      <SectionMyActivityListItem />
      <SectionMyActivityListItem />
    </SectionMyActivityListWrapper>
  );
};

export default SectionMyActivityList;
