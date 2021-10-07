import React from "react";
import { useArray } from "../../../hooks/useArray";
import SectionItem, { ISectionItem } from "./SectionItem";
import * as S from "./styles";

export interface SectionMyActivityListProps {
  sections: ISectionItem[];
  prefixUrl: string;
}

const SectionMyActivityList = ({
  sections,
  prefixUrl,
}: SectionMyActivityListProps) => {
  const { value: sectionList } = useArray(sections);

  return (
    <S.SectionList>
      {sectionList.map(
        ({ title, description, id }: ISectionItem, index: number) => (
          <SectionItem
            key={index}
            title={title}
            description={description}
            url={`${prefixUrl}/${id}`}
          />
        )
      )}
    </S.SectionList>
  );
};

export default SectionMyActivityList;
