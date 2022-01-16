import { Title, FeaturedCard, RichText } from "@gamiui/standard";
import React from "react";
import * as S from "./styles";

export interface IIdeasAndProjectsItem {
  title: string;
  description: string;
}

const IdeasAndProjectsItem = ({
  title,
  description,
}: IIdeasAndProjectsItem) => {
  return (
    <S.IdeasAndProjectsItem>
      <FeaturedCard
        text={
          <div>
            <Title level="h3">{title}</Title>
            <RichText text={description} />
          </div>
        }
      />
    </S.IdeasAndProjectsItem>
  );
};

export default IdeasAndProjectsItem;
