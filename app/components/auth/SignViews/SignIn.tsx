import React from "react";
import * as S from "./styles";
import {
  Button,
  Card,
  Form,
  Input,
  Password,
  Row,
  Spacer,
  Title,
} from "gamification-library";
import { SIGN__TEXT__VALUES } from "../../../constants/auth";
import { TLoginType } from ".";

export interface ISignIn {
  loginType: TLoginType;
}

const SignIn = ({ loginType }: ISignIn) => {
  return (
    <S.Card>
      <Card shadow="SMALL" border="LARGE">
        <S.CardBody>
          <Spacer direction="top" />
          <Row>
            <Title level="h3">{SIGN__TEXT__VALUES[loginType].titleAuth}</Title>
          </Row>
          <Spacer direction="top" />
          <Row>
            <Title level="h5">
              {SIGN__TEXT__VALUES[loginType].descriptionAuth}
            </Title>
          </Row>

          <Form>
            <Form.Item label="Email" name="email">
              <Input
                width="FULL"
                border="ROUNDED"
                shadow="NONE"
                placeholder="Ingresa tu email"
              />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Password
                width="FULL"
                border="ROUNDED"
                shadow="NONE"
                placeholder="Ingresa tu contraseña"
              />
            </Form.Item>

            <Form.Item name="submit">
              <Button
                style={{ margin: "auto" }}
                type="primary"
                border="ROUNDED"
              >
                {SIGN__TEXT__VALUES[loginType].buttonAuth}
              </Button>
            </Form.Item>
          </Form>
        </S.CardBody>
      </Card>
    </S.Card>
  );
};

export default SignIn;
