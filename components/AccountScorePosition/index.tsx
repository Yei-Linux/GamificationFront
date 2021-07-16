/* eslint-disable react/display-name */
import { Avatar, RichText, Row, Table, Tag } from "gamification-library";
import React from "react";
import Section from "../../layouts/Section";
import { themeCustom } from "../../styles/theme";
import { AccountScorePositionWrapper } from "./styles";

export interface AccountScorePositionProps {}

const AccountScorePosition = ({}: AccountScorePositionProps) => {
  return (
    <AccountScorePositionWrapper>
      <Section title="Mi puntuacion global">
        <Row>
          <Table
            columns={[
              { title: "Posicion", dataIndex: "position" },
              { title: "Avatar", dataIndex: "avatar" },
              {
                title: "Usuario",
                dataIndex: "user",
                render: (user: string) => (
                  <RichText
                    fontWeight="BOLD"
                    text={`[${user}](https://google.com?target=_blank)`}
                  />
                ),
              },
              { title: "Level", dataIndex: "level" },
              {
                title: "Puntos",
                dataIndex: "points",
                render: (points: string) => (
                  <RichText fontWeight="BOLD" text={points} />
                ),
              },
            ]}
            data={[
              {
                position: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.three}
                    color={themeCustom.light.color.card.earth.color}
                    text="1"
                    textAlign="CENTER"
                  />
                ),
                avatar: (
                  <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
                ),
                user: "Yei-Linux",
                level: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.one}
                    color={themeCustom.light.color.card.earth.color}
                    text="Lvl 7"
                    textAlign="CENTER"
                  />
                ),
                points: "1500",
              },
              {
                position: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.three}
                    color={themeCustom.light.color.card.earth.color}
                    text="1"
                    textAlign="CENTER"
                  />
                ),
                avatar: (
                  <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
                ),
                user: "Yei-Linux",
                level: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.one}
                    color={themeCustom.light.color.card.earth.color}
                    text="Lvl 7"
                    textAlign="CENTER"
                  />
                ),
                points: "1500",
              },
              {
                position: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.three}
                    color={themeCustom.light.color.card.earth.color}
                    text="1"
                    textAlign="CENTER"
                  />
                ),
                avatar: (
                  <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
                ),
                user: "Yei-Linux",
                level: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.one}
                    color={themeCustom.light.color.card.earth.color}
                    text="Lvl 7"
                    textAlign="CENTER"
                  />
                ),
                points: "1500",
              },
              {
                position: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.three}
                    color={themeCustom.light.color.card.earth.color}
                    text="1"
                    textAlign="CENTER"
                  />
                ),
                avatar: (
                  <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
                ),
                user: "Yei-Linux",
                level: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.one}
                    color={themeCustom.light.color.card.earth.color}
                    text="Lvl 7"
                    textAlign="CENTER"
                  />
                ),
                points: "1500",
              },
              {
                position: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.three}
                    color={themeCustom.light.color.card.earth.color}
                    text="1"
                    textAlign="CENTER"
                  />
                ),
                avatar: (
                  <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
                ),
                user: "Yei-Linux",
                level: (
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.one}
                    color={themeCustom.light.color.card.earth.color}
                    text="Lvl 7"
                    textAlign="CENTER"
                  />
                ),
                points: "1500",
              },
            ]}
          />
        </Row>
      </Section>
    </AccountScorePositionWrapper>
  );
};

export default AccountScorePosition;
