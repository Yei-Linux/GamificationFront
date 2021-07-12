import {
  Col,
  FeaturedCard,
  Image,
  ProgressBar,
  RichText,
  Row,
  Tag,
  Title,
} from "gamification-library";
import React from "react";
import { themeCustom } from "../../styles/theme";
import {
  AccountInformationWrapper,
  AccountProfile,
  AccountTask,
  AccountTaskItem,
} from "./styles";

export interface AccountInformationProps {}

const AccountInformation = ({}: AccountInformationProps) => {
  return (
    <AccountInformationWrapper>
      <AccountProfile>
        <Row>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Row>
              <Image
                alt="profile"
                width="80px"
                src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png"
              />
            </Row>
            <Row>
              <Tag
                background={themeCustom.light.color.secondary.one}
                color={themeCustom.light.color.card.earth.color}
                text="Lvl 7"
                textAlign="CENTER"
              />
            </Row>
          </Col>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Title level="h2" textAlign="CENTER">
              Yei Linux
            </Title>
          </Col>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Row>
              <Tag
                background={themeCustom.light.color.neutral.eight}
                text="yeilinux@gmail.com"
                textAlign="CENTER"
              />
            </Row>
          </Col>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <ProgressBar percent={75} />
          </Col>
        </Row>
      </AccountProfile>

      <AccountTask>
        <Row>
          <AccountTaskItem>
            <FeaturedCard
              text={
                <div>
                  <Title level="h3">0</Title>
                  <RichText text="Tareas completadas" />
                </div>
              }
            />
          </AccountTaskItem>
          <AccountTaskItem>
            <FeaturedCard
              themeType="spring"
              text={
                <div>
                  <Title level="h3">0</Title>
                  <RichText text="Examenes resueltos" />
                </div>
              }
            />
          </AccountTaskItem>
          <AccountTaskItem>
            <FeaturedCard
              text={
                <div>
                  <Title level="h3">0</Title>
                  <RichText text="Misiones resueltas" />
                </div>
              }
            />
          </AccountTaskItem>
        </Row>
      </AccountTask>
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
