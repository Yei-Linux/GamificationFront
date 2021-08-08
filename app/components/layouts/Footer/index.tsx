import { Col, RichText, Row, Title, Wave, Image } from "gamification-library";
import React from "react";
import { themeCustom } from "../../../../styles/theme";
import * as S from "./styles";

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Wave
      name="two"
      background={themeCustom.light.color.primary.two}
      direction="top"
    >
      <S.Footer>
        <Row>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Row>
              <Image
                style={{ borderRadius: "20em" }}
                alt="Topbar logo"
                width="100px"
                src={
                  "https://image.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg"
                }
              />
            </Row>
          </Col>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <Title textAlign="CENTER" level="h3">
              Handcrafted by © YeiLinux
            </Title>
          </Col>
          <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
            <RichText text="Made with Nextjs" textAlign="CENTER" />
          </Col>
        </Row>
      </S.Footer>
    </Wave>
  );
};

export default Footer;
