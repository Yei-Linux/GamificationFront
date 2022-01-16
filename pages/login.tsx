import styled from "@emotion/styled";
import { Row, Col, Image, mediaQuery } from "@gamiui/standard";
import React from "react";
import SignViews from "../app/components/auth/SignViews";

const LoginWrapper = styled.div`
  height: 100vh;
`;

const ImageContainer = styled.div`
  display: none;
  ${mediaQuery("md")} {
    display: block;
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Row>
        <Col spacing="sm" xs={12} sm={12} md={6} lg={6}>
          <Row>
            <SignViews />
          </Row>
        </Col>
        <Col spacing="sm" xs={12} sm={12} md={6} lg={6}>
          <ImageContainer>
            <Row>
              <Image
                width="300px"
                alt="Image Login"
                src="https://i.ibb.co/7rxmRdq/009-app-user-colour.jpg"
              />
            </Row>
          </ImageContainer>
        </Col>
      </Row>
    </LoginWrapper>
  );
};

export default Login;
