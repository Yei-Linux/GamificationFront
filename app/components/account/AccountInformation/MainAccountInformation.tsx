import classNames from "classnames";
import {
  Col,
  Icon,
  Image,
  Link,
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

export interface ISocialNetwork {
  iconId: string;
  url: string;
}

export interface IAccountInformation {
  photo?: string;
  userName: string;
  role: string;
  lvl: number;
  scorePercentBar: number;
  score?: number;
  scoreToNextLvl?: number;
  socialNetworks?: ISocialNetwork[];

  isShowOnlyImportantContent?: boolean;
  background?: string;
  color?: string;
}

const MainAccountInformation = ({
  photo,
  userName,
  role,
  lvl,
  scorePercentBar,
  score,
  scoreToNextLvl,
  socialNetworks,

  isShowOnlyImportantContent = false,
  background = themeCustom.light.primary.jordyBlue,
  color = themeCustom.light.neutral[800],
}: IAccountInformation) => {
  return (
    <S.Profile $background={background}>
      <Row style={{ margin: "auto" }} width="fit-content">
        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          {!isShowOnlyImportantContent && photo && (
            <Row>
              <Image alt="profile" width="150px" src={photo} />
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
              <RichText text={role} />
            </S.ProfileName>
          </Row>
          <Spacer direction="bottom" />
          <Row>
            <Tag
              shadow="none"
              background={themeCustom.light.extended.code}
              color={componentsThemeCustom("light").card.earth.color}
              text={`Level ${lvl}`}
            />
          </Row>
        </Col>

        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <ProgressBar percent={scorePercentBar} backgroundProgress="#c8d9ff" />
        </Col>

        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <Row height="auto">
            <S.LvlTagAccountItem>
              <Tag
                shadow="none"
                color={themeCustom.light.neutral[0]}
                background={themeCustom.light.neutral[700]}
                text={`Score: ${score}`}
                textAlign="center"
              />
            </S.LvlTagAccountItem>

            <S.LvlTagAccountItem>
              <Tag
                shadow="none"
                color={themeCustom.light.neutral[0]}
                background={themeCustom.light.neutral[700]}
                text={`To Next Lvl: ${scoreToNextLvl}`}
                textAlign="center"
              />
            </S.LvlTagAccountItem>
          </Row>
        </Col>

        {!isShowOnlyImportantContent && (
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Row height="auto">
              {socialNetworks?.map(({ url, iconId }, index: number) => (
                <Link href={url} isExternal key={index}>
                  <S.SocialNetworkItem
                    className={classNames("flex", "justify-center")}
                  >
                    <Icon name={iconId} />
                  </S.SocialNetworkItem>
                </Link>
              ))}
            </Row>
          </Col>
        )}
      </Row>
    </S.Profile>
  );
};

export default MainAccountInformation;
