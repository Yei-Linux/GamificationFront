import classNames from "classnames";
import {
  Col,
  Icon,
  Image,
  ProgressBar,
  RichText,
  Row,
  Spacer,
  Tag,
  Title,
} from "gamification-library";
import React from "react";
import { componentsThemeCustom, themeCustom } from "../../../../styles/theme";

import * as S from "./styles";

export interface IAccountInformation {
  srcProfile?: string;
  lvl: string;
  userName: string;
  email?: string;
  experiencePercent: number;

  isShowOnlyImportantContent?: boolean;
  background?: string;
  color?: string;
}

const MainAccountInformation = ({
  srcProfile,
  lvl,
  userName,
  experiencePercent,
  isShowOnlyImportantContent = false,
  background = themeCustom.light.primary.jordyBlue,
  color = themeCustom.light.neutral[800],
}: IAccountInformation) => {
  return (
    <S.Profile $background={background}>
      <Row style={{ margin: "auto" }} width="fit-content">
        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          {!isShowOnlyImportantContent && srcProfile && (
            <Row>
              <Image alt="profile" width="150px" src={srcProfile} />
            </Row>
          )}
          <Row>
            <S.ProfileName $color={color}>
              <Title level="h2">{userName}</Title>
            </S.ProfileName>
          </Row>
          <Spacer direction="bottom" />
          <Row>
            <S.ProfileName $color={color}>
              <RichText text="FullStack" />
            </S.ProfileName>
          </Row>
          <Spacer direction="bottom" />
          <Row>
            <Tag
              shadow="none"
              background={themeCustom.light.extended.code}
              color={componentsThemeCustom("light").card.earth.color}
              text={lvl}
            />
          </Row>
        </Col>

        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <ProgressBar
            percent={experiencePercent}
            backgroundProgress="#c8d9ff"
          />
        </Col>

        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <Row height="auto">
            <S.LvlTagAccountItem>
              <Tag
                shadow="none"
                color={themeCustom.light.neutral[0]}
                background={themeCustom.light.neutral[700]}
                text="Score: 1500"
                textAlign="center"
              />
            </S.LvlTagAccountItem>

            <S.LvlTagAccountItem>
              <Tag
                shadow="none"
                color={themeCustom.light.neutral[0]}
                background={themeCustom.light.neutral[700]}
                text="To Next Lvl: 50"
                textAlign="center"
              />
            </S.LvlTagAccountItem>
          </Row>
        </Col>

        {!isShowOnlyImportantContent && (
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Row height="auto">
              <S.SocialNetworkItem
                className={classNames("flex", "justify-center")}
              >
                <Icon name="github" />
              </S.SocialNetworkItem>
              <S.SocialNetworkItem
                className={classNames("flex", "justify-center")}
              >
                <Icon name="twitter" />
              </S.SocialNetworkItem>
              <S.SocialNetworkItem
                className={classNames("flex", "justify-center")}
              >
                <Icon name="linkedin" />
              </S.SocialNetworkItem>
            </Row>
          </Col>
        )}
      </Row>
    </S.Profile>
  );
};

export default MainAccountInformation;
