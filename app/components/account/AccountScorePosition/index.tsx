import { Avatar, Row, Table, Tag } from "gamification-library";
import React from "react";
import { componentsThemeCustom, themeCustom } from "../../../../styles/theme";
import { ACCOUNT__TABLE } from "../../../constants/account";
import Section from "../../layouts/Section";

import * as S from "./styles";

export interface IUserPosition {
  position: number;
  avatar: string;
  userName: string;
  lvl: number;
  score: number;
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
              ({ position, avatar, userName, lvl, score }: IUserPosition) => ({
                position: (
                  <Tag
                    shadow="md"
                    background={themeCustom.light.secondary.nepal}
                    color={componentsThemeCustom("light").card.earth.color}
                    text={`${position}`}
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
                    text={`Lvl ${lvl}`}
                    textAlign="center"
                  />
                ),
                score,
              })
            )}
          />
        </Row>
      </Section>
    </S.AccountScorePosition>
  );
};

export default AccountScorePosition;
