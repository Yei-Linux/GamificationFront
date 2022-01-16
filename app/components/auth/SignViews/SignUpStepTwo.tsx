import React, { Fragment } from "react";

import {
  Button,
  Form,
  Input,
  Row,
  Spacer,
} from "@gamiui/standard";
import { SIGN__TEXT__VALUES } from "../../../constants/auth";
import { TLoginType } from ".";
import * as S from "./styles";
import { themeCustom } from "../../../../styles/theme";

export interface ISignUpStepTwo {
  loginType: TLoginType;
  onClickNext: (values: any) => any;
}

const SignUpStepTwo = ({ loginType, onClickNext }: ISignUpStepTwo) => {
  return (
    <Fragment>
      <Spacer direction="top" />
      <Row justifyContent="flex-start" height="auto">
        <S.ArrowBack
          onClick={() => onClickNext(0)}
          fill={themeCustom.light.primary.jordyBlue}
          name="arrow__left"
        />
      </Row>

      <Form>
        <Form.Item label="Lastname" name="lastname">
          <Input
            width="full"
            border="sm"
            shadow="sm"
            placeholder="Ingresa tus apellidos"
          />
        </Form.Item>

        <Form.Item label="Specialization" name="specialization">
          <Input
            width="full"
            border="sm"
            shadow="sm"
            placeholder="Escoge tu especilizacion"
          />
        </Form.Item>

        <Form.Item label="Programming Language" name="language">
          <Input
            width="full"
            border="sm"
            shadow="sm"
            placeholder="Escoge tu lenguaje"
          />
        </Form.Item>

        <Form.Item name="submit">
          <Button style={{ margin: "auto" }} variant="primary" border="lg">
            {SIGN__TEXT__VALUES[loginType].buttonAuth}
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignUpStepTwo;
