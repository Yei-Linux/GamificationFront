import { Avatar, Row, Table, Tag } from "gamification-library";
import React from "react";
import { componentsThemeCustom, themeCustom } from "../../../../styles/theme";
import { ACCOUNT__TABLE } from "../../../constants/account";
import Section from "../../layouts/Section";

import * as S from "./styles";

export interface IUserPosition {
  avatar: string;
  userName: string;
  lvl: string;
  points: string;
}

export interface IAccountScorePosition {
  userPositions: IUserPosition[];
}

const AccountScorePosition = ({ userPositions }: IAccountScorePosition) => {
  return (
    <S.AccountScorePosition>
      <Section title="Mi puntuacion global">
        <Row>
          <Table
            columns={ACCOUNT__TABLE}
            data={userPositions.map(
              (
                { avatar, userName, lvl, points }: IUserPosition,
                index: number
              ) => ({
                position: (
                  <Tag
                    shadow="md"
                    background={themeCustom.light.secondary.nepal}
                    color={componentsThemeCustom("light").card.earth.color}
                    text={`${index}`}
                    textAlign="center"
                  />
                ),
                avatar: <Avatar src={avatar} />,
                user: userName,
                level: (
                  <Tag
                    shadow="md"
                    background={themeCustom.light.secondary.linkWater}
                    color={componentsThemeCustom("light").card.earth.color}
                    text={lvl}
                    textAlign="center"
                  />
                ),
                points,
              })
            )}
          />
        </Row>
      </Section>
    </S.AccountScorePosition>
  );
};

export default AccountScorePosition;
