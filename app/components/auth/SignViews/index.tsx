import { Tab } from "gamification-library";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import * as S from "./styles";

export interface SignViewsProps {}

export type TLoginType = "signIn" | "signUp";

const SignViews = ({}: SignViewsProps) => {
  const [loginType] = useState<TLoginType>("signIn");

  return (
    <S.SignViews>
      <Tab defaultActiveTab={loginType}>
        <Tab.List>
          <Tab.ListItem label="SignIn" tabId="signIn" />
          <Tab.ListItem label="SignUp" tabId="signUp" />
        </Tab.List>
        <Tab.Content>
          <Tab.ContentItem tabId="signIn">
            <SignIn loginType="signIn" />
          </Tab.ContentItem>
          <Tab.ContentItem tabId="signUp">
            <SignUp loginType="signUp" />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </S.SignViews>
  );
};

export default SignViews;
