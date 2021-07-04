import styled from "@emotion/styled";
import { Card, Slider, Title, Wave, Image } from "gamification-library";
import React from "react";
import WithLayout from "../hoc/WithLayout";
import TitleSection from "../layouts/TitleSection";
import { themeCustom } from "../styles/theme";

const MainBanner = styled.div`
  height: "300px";
  width: "100%";
  background-color: "#7f9cf5";

  h3 {
    color: ${themeCustom.light.color.neutral.nine};
  }
`;

const CarouselContainer = styled.div``;

const Home = () => {
  return (
    <div>
      <Wave direction="bottom">
        <MainBanner>
          <Title level="h3">Mis secciones</Title>
          <CarouselContainer>
            <Slider slidesPerView={1}>
              <Card>
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
              <Card>
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
            </Slider>
          </CarouselContainer>
        </MainBanner>
      </Wave>
      <TitleSection text="Mis clases" iconId="book" />
      <TitleSection text="Mis apuntes" iconId="postit" />
      <TitleSection text="Ponte a prueba" iconId="rocket" />
      <TitleSection text="Mis dudas" iconId="question" />
    </div>
  );
};

export default WithLayout({ hasHeader: true })(Home);
