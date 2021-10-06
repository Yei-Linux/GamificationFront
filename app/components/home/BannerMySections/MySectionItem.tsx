import { Card, Icon, Link as CustomLink } from "gamification-library";
import React from "react";
import * as S from "./styles";
import Link from "next/link";

export interface IMySectionItem {
  title: string;
  description: string;
  iconId: string;
  id: string;
}

const MySectionItem = ({ title, description, iconId, id }: IMySectionItem) => {
  return (
    <S.MySectionItem className="keen-slider__slide">
      <Link href={`/challenges/${id}`} passHref>
        <CustomLink href={`/challenges/${id}`}>
          <Card
            className="mysectionitem__card"
            style={{
              background: "white",
              padding: "10px 0px",
            }}
            width="auto"
            border="md"
            shadow="lg"
          >
            <Card.Cover>
              <Icon size="30px" name={iconId} />
            </Card.Cover>
            <Card.Content title={title} description={description} />
          </Card>
        </CustomLink>
      </Link>
    </S.MySectionItem>
  );
};

export default MySectionItem;
