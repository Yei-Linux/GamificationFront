import { Card, Image } from "gamification-library";
import React from "react";
import { CarouselItemContainer } from "./styles";

export interface SectionSliderItemProps {}

const SectionSliderItem = () => {
  return (
    <CarouselItemContainer className="keen-slider__slide">
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
          <Image
            width="50px"
            alt="Carousel"
            src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
          />
        </Card.Cover>
        <Card.Content
          title="Hard Challenges"
          description="This is my description"
        />
      </Card>
    </CarouselItemContainer>
  );
};

export default SectionSliderItem;
