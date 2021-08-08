import { Card, Image } from "gamification-library";
import React from "react";
import * as S from "./styles";

export interface IMySectionItem {
  title: string;
  description: string;
  src: string;
}

const MySectionItem = ({ title, description, src }: IMySectionItem) => {
  return (
    <S.MySectionItem className="keen-slider__slide">
      <Card
        style={{
          background: "white",
          padding: "10px 0px",
        }}
        width="NONE"
        border="MEDIUM"
        shadow="LARGE"
      >
        <Card.Cover>
          <Image width="50px" alt="Carousel" src={src} />
        </Card.Cover>
        <Card.Content title={title} description={description} />
      </Card>
    </S.MySectionItem>
  );
};

export default MySectionItem;
