import React, { Fragment } from "react";

import {
  Button,
  Form,
  Input,
  Password,
  Row,
  Spacer,
  Title,
} from "gamification-library";
import { SIGN__TEXT__VALUES } from "../../../constants/auth";
import { TLoginType } from ".";

export interface ISignUpStepOne {
  loginType: TLoginType;
  onClickNext: (values: any) => any;
}

const SignUpStepOne = ({ loginType, onClickNext }: ISignUpStepOne) => {
  const handleGetDataOfFirstStep = (values: any) => {
    console.log(values);
    onClickNext(values);
  };

  return (
    <Fragment>
      <Spacer direction="top" />
      <Row height="auto">
        <Title level="h3">{SIGN__TEXT__VALUES[loginType].titleAuth}</Title>
      </Row>
      <Spacer direction="top" />
      <Row height="auto">
        <Title level="h5">
          {SIGN__TEXT__VALUES[loginType].descriptionAuth}
        </Title>
      </Row>

      <Form onSubmitForm={handleGetDataOfFirstStep}>
        <Form.Item label="Email" name="email">
          <Input
            width="full"
            border="sm"
            shadow="sm"
            placeholder="Ingresa tu email"
          />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Password
            width="full"
            border="sm"
            shadow="sm"
            placeholder="Ingresa tu contraseña"
          />
        </Form.Item>

        <Form.Item label="Fullname" name="fullname">
          <Input
            width="full"
            border="sm"
            shadow="sm"
            placeholder="Ingresa tus nombres"
          />
        </Form.Item>

        <Form.Item name="submit">
          <Button style={{ margin: "auto" }} variant="primary" border="lg">
            Siguiente
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignUpStepOne;
