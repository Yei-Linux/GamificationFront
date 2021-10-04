import {
  Col,
  Image,
  ProgressBar,
  Row,
  Tag,
  Title,
  Wave,
} from "gamification-library";
import React from "react";
import { componentsThemeCustom, themeCustom } from "../../../../styles/theme";

import * as S from "./styles";

export interface IAccountInformation {
  srcProfile: string;
  lvl: string;
  userName: string;
  email: string;
  experiencePercent: number;
}

const AccountInformation = ({
  srcProfile,
  lvl,
  userName,
  email,
  experiencePercent,
}: IAccountInformation) => {
  return (
    <S.AccountInformation>
      <Wave direction="bottom">
        <S.Profile>
          <Row style={{ margin: "auto" }} width="fit-content">
            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <Row>
                <Image alt="profile" width="150px" src={srcProfile} />
              </Row>
              <Row>
                <Tag
                  shadow="none"
                  background={themeCustom.light.secondary.nepal}
                  color={componentsThemeCustom("light").card.earth.color}
                  text={lvl}
                />
              </Row>
            </Col>
            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <S.ProfileName>
                <Title level="h2">{userName}</Title>
              </S.ProfileName>
            </Col>
            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <Row>
                <Tag
                  shadow="none"
                  background={themeCustom.light.neutral[700]}
                  text={email}
                  textAlign="center"
                />
              </Row>
            </Col>
            <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
              <ProgressBar
                percent={experiencePercent}
                backgroundProgress="#c8d9ff"
              />
            </Col>
          </Row>
        </S.Profile>
      </Wave>
    </S.AccountInformation>
  );
};

export default AccountInformation;
