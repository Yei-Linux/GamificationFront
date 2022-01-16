import React from "react";
import * as S from "./styles";
import { Card, Steps } from "@gamiui/standard";
import { TLoginType } from ".";
import SignUpStepOne from "./SignUpStepOne";
import SignUpStepTwo from "./SignUpStepTwo";

export interface ISignUp {
  loginType: TLoginType;
}

const SignUp = ({ loginType }: ISignUp) => {
  return (
    <S.Card>
      <Card shadow="sm" border="lg">
        <S.CardBody>
          <S.StepsSignUp>
            <Steps.Body>
              <Steps.Item
                render={({ setCurrentStep }) => (
                  <SignUpStepOne
                    loginType={loginType}
                    onClickNext={() => setCurrentStep(1)}
                  />
                )}
              />
              <Steps.Item
                render={({ setCurrentStep }) => (
                  <SignUpStepTwo
                    loginType={loginType}
                    onClickNext={() => setCurrentStep(0)}
                  />
                )}
              />
            </Steps.Body>
          </S.StepsSignUp>
        </S.CardBody>
      </Card>
    </S.Card>
  );
};

export default SignUp;
