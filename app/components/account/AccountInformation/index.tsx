import { Wave } from "gamification-library";
import React from "react";
import MainAccountInformation, {
  IAccountInformation,
} from "./MainAccountInformation";

import * as S from "./styles";

const AccountInformation = ({
  srcProfile,
  lvl,
  userName,
  experiencePercent,
}: IAccountInformation) => {
  return (
    <S.AccountInformation>
      <Wave direction="bottom">
        <MainAccountInformation
          srcProfile={srcProfile}
          lvl={lvl}
          userName={userName}
          experiencePercent={experiencePercent}
        />
      </Wave>
    </S.AccountInformation>
  );
};

export default AccountInformation;
