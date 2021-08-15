import React, { Fragment } from "react";

import {
  Button,
  Form,
  Input,
  Row,
  Spacer,
} from "gamification-library";
import { SIGN__TEXT__VALUES } from "../../../constants/auth";
import { TLoginType } from ".";
import { colorLight } from "gamification-library/src/styles/theme";
import * as S from "./styles";

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
          fill={colorLight.primary.one}
          name="arrowLeft"
        />
      </Row>

      <Form>
        <Form.Item label="Lastname" name="lastname">
          <Input
            width="FULL"
            border="ROUNDED"
            shadow="NONE"
            placeholder="Ingresa tus apellidos"
          />
        </Form.Item>

        <Form.Item label="Specialization" name="specialization">
          <Input
            width="FULL"
            border="ROUNDED"
            shadow="NONE"
            placeholder="Escoge tu especilizacion"
          />
        </Form.Item>

        <Form.Item label="Programming Language" name="language">
          <Input
            width="FULL"
            border="ROUNDED"
            shadow="NONE"
            placeholder="Escoge tu lenguaje"
          />
        </Form.Item>

        <Form.Item name="submit">
          <Button style={{ margin: "auto" }} type="primary" border="ROUNDED">
            {SIGN__TEXT__VALUES[loginType].buttonAuth}
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default SignUpStepTwo;
