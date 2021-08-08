import React from "react";
import { useArray } from "../../../hooks/useArray";
import SectionItem, { ISectionItem } from "./SectionItem";
import * as S from "./styles";

export interface SectionMyActivityListProps {
  sections: ISectionItem[];
}

const SectionMyActivityList = ({ sections }: SectionMyActivityListProps) => {
  const { value: sectionList } = useArray(sections);

  return (
    <S.SectionList>
      {sectionList.map(
        ({ title, description, buttonText }: ISectionItem, index: number) => (
          <SectionItem
            key={index}
            title={title}
            description={description}
            buttonText={buttonText}
          />
        )
      )}
    </S.SectionList>
  );
};

export default SectionMyActivityList;
