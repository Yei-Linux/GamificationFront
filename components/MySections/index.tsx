import React from "react";

import { Card, Title, Wave, Image, Slider } from "gamification-library";
import {
  MainBanner,
  TitleContainer,
  CarouselContainer,
  CarouselItemContainer,
} from "./styles";

export interface MySectionProps {}

const MySections = () => {
  return (
    <Wave direction="bottom">
      <MainBanner>
        <TitleContainer>
          <Title level="h2">Mis secciones</Title>
        </TitleContainer>
        <CarouselContainer>
          <Slider
            slidesPerView={{
              phone: 2,
              tablet: 2,
              laptop: 5,
              desktop: 6,
            }}
          >
            <CarouselItemContainer className="keen-slider__slide">
              <Card
                style={{ background: "white", padding: "10px 0px" }}
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
                  description="Hi this is description"
                />
              </Card>
            </CarouselItemContainer>

            <CarouselItemContainer className="keen-slider__slide">
              <Card
                style={{ background: "white", padding: "10px 0px" }}
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
                  description="Hi this is description"
                />
              </Card>
            </CarouselItemContainer>

            <CarouselItemContainer className="keen-slider__slide">
              <Card
                style={{ background: "white", padding: "10px 0px" }}
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
                  description="Hi this is description"
                />
              </Card>
            </CarouselItemContainer>
            <CarouselItemContainer className="keen-slider__slide">
              <Card
                style={{ background: "white", padding: "10px 0px" }}
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
                  description="Hi this is description"
                />
              </Card>
            </CarouselItemContainer>
            <CarouselItemContainer className="keen-slider__slide">
              <Card
                style={{ background: "white", padding: "10px 0px" }}
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
                  description="Hi this is description"
                />
              </Card>
            </CarouselItemContainer>
            <CarouselItemContainer className="keen-slider__slide">
              <Card
                style={{ background: "white", padding: "10px 0px" }}
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
                  description="Hi this is description"
                />
              </Card>
            </CarouselItemContainer>
          </Slider>
        </CarouselContainer>
      </MainBanner>
    </Wave>
  );
};

export default MySections;
