import { Avatar, Button, Card, Row, Title } from "gamification-library";
import React from "react";
import { TitleContainer } from "../MySections/styles";
import {
  FeaturedStudentsItem,
  FeaturedStudentsItemCard,
  FeaturedStudentsWrapper,
} from "./styles";

export interface FeaturedStudentsProps {}

const FeaturedStudents = ({}: FeaturedStudentsProps) => {
  return (
    <FeaturedStudentsWrapper>
      <TitleContainer>
        <Title level="h2">Alumnos destacados</Title>
      </TitleContainer>

      <Row>
        <FeaturedStudentsItem>
          <Card>
            <FeaturedStudentsItemCard>
              <Row>
                <Avatar
                  background="white"
                  src="https://iconape.com/wp-content/png_logo_vector/avatar-11.png"
                />
              </Row>

              <Card.Content
                title="Row Phillips"
                description="Level: Advanced"
              />

              <Row>
                <Button width="NORMAL" heigth="NORMAL">
                  Ver Perfil
                </Button>
              </Row>
            </FeaturedStudentsItemCard>
          </Card>
        </FeaturedStudentsItem>

        <FeaturedStudentsItem>
          <Card>
            <FeaturedStudentsItemCard>
              <Row>
                <Avatar
                  background="white"
                  src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
                />
              </Row>

              <Card.Content
                title="Row Phillips"
                description="Level: Advanced"
              />

              <Row>
                <Button width="NORMAL" heigth="NORMAL">
                  Ver Perfil
                </Button>
              </Row>
            </FeaturedStudentsItemCard>
          </Card>
        </FeaturedStudentsItem>

        <FeaturedStudentsItem>
          <Card>
            <FeaturedStudentsItemCard>
              <Row>
                <Avatar
                  background="white"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrdluMn7uZwKj8my07XOkg79z72JGQHQ8K2gKs13cQgKDsDipSxRLq_3JILuBLGo6YHY&usqp=CAU"
                />
              </Row>

              <Card.Content
                title="Row Phillips"
                description="Level: Advanced"
              />

              <Row>
                <Button width="NORMAL" heigth="NORMAL">
                  Ver Perfil
                </Button>
              </Row>
            </FeaturedStudentsItemCard>
          </Card>
        </FeaturedStudentsItem>
      </Row>
    </FeaturedStudentsWrapper>
  );
};

export default FeaturedStudents;
