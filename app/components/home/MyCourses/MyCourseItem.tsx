import classNames from "classnames";
import {
  Button,
  Card,
  Row,
  Link as CustomLink,
  Avatar,
  Spacer,
} from "gamification-library";
import React from "react";

import * as S from "./styles";

export interface IMyCourseItem {
  id: string;
  title: string;
  description: string;
  src: string;
}

const MyCourseItem = ({ id, title, description, src }: IMyCourseItem) => {
  return (
    <S.MyCourseItem>
      <Card>
        <S.CardBody className={classNames("flex")}>
          <S.CourseItemLogo>
            <Row>
              <Avatar background="white" src={src} />
            </Row>
          </S.CourseItemLogo>

          <Spacer direction="right" />

          <S.CourseItemDetail>
            <Card.Content title={title} description={description} />

            <Row height="auto">
              <CustomLink isExternal href={`/courses/${id}`}>
                <Button width="auto" heigth="auto">
                  View Course
                </Button>
              </CustomLink>
            </Row>
          </S.CourseItemDetail>
        </S.CardBody>
      </Card>
    </S.MyCourseItem>
  );
};

export default MyCourseItem;
