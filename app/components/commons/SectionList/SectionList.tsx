import classNames from "classnames";
import React from "react";
import { useArray } from "../../../hooks/useArray";
import SectionItem, { ISectionItem } from "./SectionItem";
import * as S from "./styles";

export interface ISectionList {
  sections: ISectionItem[];
  prefixUrl: string;
  alignItems: "center" | "start";
}

const SectionList = ({ sections, prefixUrl, alignItems }: ISectionList) => {
  const { value: sectionList } = useArray(sections);

  return (
    <S.SectionList
      className={classNames("flex", "justify-center", `items-${alignItems}`)}
    >
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

export default SectionList;
