import {
  Avatar,
  Button,
  Card,
  Row,
  Link as CustomLink,
  RichText,
} from "@gamiui/standard";
import React from "react";
import * as S from "./styles";
import StudentTagsLvl from "./StudentTagsLvl";
import { themeCustom } from "../../../../styles/theme";

interface ILvlDetails {
  lvl: number;
  score: number;
}

export interface IFeaturedStudentItem {
  id: string;
  lvlDetails: ILvlDetails;
  userName: string;
  avatar: string;
}

const FeaturedStudentItem = ({
  userName,
  lvlDetails: { lvl, score },
  avatar,
}: IFeaturedStudentItem) => {
  const buildTagsOfUser = () => [
    {
      text: `Lvl ${lvl}`,
      background: themeCustom.light.neutral[700],
      color: themeCustom.light.neutral[300],
    },
    {
      text: `Pts ${score}`,
      background: themeCustom.light.primary.mediumPurple,
      color: themeCustom.light.neutral[800],
    },
  ];

  return (
    <S.FeaturedStudentItem>
      <Card>
        <S.CardBody>
          <Row>
            <Avatar background="white" src={avatar} />
          </Row>

          <Card.Content
            title={<RichText text={userName} width="full" textAlign="center" />}
            description={<StudentTagsLvl tags={buildTagsOfUser()} />}
          />

          <Row>
            <CustomLink isExternal href={`/users/${userName}`}>
              <Button width="auto" heigth="auto">
                View Profile
              </Button>
            </CustomLink>
          </Row>
        </S.CardBody>
      </Card>
    </S.FeaturedStudentItem>
  );
};

export default FeaturedStudentItem;
