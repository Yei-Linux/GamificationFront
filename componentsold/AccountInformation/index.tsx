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
import { themeCustom } from "../../styles/theme";
import {
  AccountInformationWrapper,
  AccountName,
  AccountProfile,
  AccountProfileContainer,
} from "./styles";

export interface AccountInformationProps {}

const AccountInformation = ({}: AccountInformationProps) => {
  return (
    <AccountInformationWrapper>
      <Wave direction="bottom">
        <AccountProfileContainer>
          <AccountProfile>
            <Row>
              <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
                <Row>
                  <Image
                    alt="profile"
                    width="150px"
                    src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png"
                  />
                </Row>
                <Row>
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.secondary.one}
                    color={themeCustom.light.color.card.earth.color}
                    text="Lvl 7"
                    textAlign="CENTER"
                  />
                </Row>
              </Col>
              <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
                <AccountName>
                  <Title fontWeight="LIGHT" level="h2" textAlign="CENTER">
                    Yei Linux
                  </Title>
                </AccountName>
              </Col>
              <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
                <Row>
                  <Tag
                    shadow="MEDIUM"
                    background={themeCustom.light.color.neutral.eight}
                    text="yeilinux@gmail.com"
                    textAlign="CENTER"
                  />
                </Row>
              </Col>
              <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
                <ProgressBar percent={75} backgroundProgress="#c8d9ff" />
              </Col>
            </Row>
          </AccountProfile>
        </AccountProfileContainer>
      </Wave>
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
