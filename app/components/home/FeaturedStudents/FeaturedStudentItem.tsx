import { Avatar, Button, Card, Row, Link as CustomLink } from "gamification-library";
import React from "react";
import * as S from "./styles";
import Link from "next/link";

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
      <Link href={`/account/${title}`} passHref>
        <CustomLink href={`/account/${title}`}>
          <Card>
            <S.CardBody>
              <Row>
                <Avatar background="white" src={avatar} />
              </Row>

              <Card.Content title={title} description={description} />

              <Row>
                <Button width="auto" heigth="auto">
                  {buttonText}
                </Button>
              </Row>
            </S.CardBody>
          </Card>
        </CustomLink>
      </Link>
    </S.FeaturedStudentItem>
  );
};

export default FeaturedStudentItem;
