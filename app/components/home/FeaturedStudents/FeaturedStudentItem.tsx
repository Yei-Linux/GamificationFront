import { Avatar, Button, Card, Row } from "gamification-library";
import React from "react";
import * as S from "./styles";

export interface IFeaturedStudentItem {
  title: string;
  description: string;
  avatar: string;
  buttonText?: string;
}

const FeaturedStudentItem = ({
  title,
  description,
  avatar,
  buttonText,
}: IFeaturedStudentItem) => {
  return (
    <S.FeaturedStudentItem>
      <Card>
        <S.CardBody>
          <Row>
            <Avatar background="white" src={avatar} />
          </Row>

          <Card.Content title={title} description={description} />

          <Row>
            <Button width="NORMAL" heigth="NORMAL">
              {buttonText}
            </Button>
          </Row>
        </S.CardBody>
      </Card>
    </S.FeaturedStudentItem>
  );
};

export default FeaturedStudentItem;
