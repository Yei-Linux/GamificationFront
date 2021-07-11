import { Avatar, Button, Card, Row } from "gamification-library";
import React from "react";
import {
  SectionFeaturedStudentsItemCard,
  SectionFeaturedStudentsItemWrapper,
} from "./styles";

export interface SectionFeaturedStudentsItemProps {}

const SectionFeaturedStudentsItem = ({}: SectionFeaturedStudentsItemProps) => {
  return (
    <SectionFeaturedStudentsItemWrapper>
      <Card>
        <SectionFeaturedStudentsItemCard>
          <Row>
            <Avatar
              background="white"
              src="https://iconape.com/wp-content/png_logo_vector/avatar-11.png"
            />
          </Row>

          <Card.Content title="Row Phillips" description="Level: Advanced" />

          <Row>
            <Button width="NORMAL" heigth="NORMAL">
              Ver Perfil
            </Button>
          </Row>
        </SectionFeaturedStudentsItemCard>
      </Card>
    </SectionFeaturedStudentsItemWrapper>
  );
};

export default SectionFeaturedStudentsItem;
