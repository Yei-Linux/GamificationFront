import { Wave } from "@gamiui/standard";
import React from "react";
import MainAccountInformation, {
  IAccountInformation,
} from "./MainAccountInformation";

import * as S from "./styles";

const AccountInformation = ({
  photo,
  userName,
  role,
  lvl,
  scorePercentBar,
  score,
  scoreToNextLvl,
  socialNetworks,
}: IAccountInformation) => {
  return (
    <S.AccountInformation>
      <Wave direction="bottom">
        <MainAccountInformation
          photo={photo}
          lvl={lvl}
          userName={userName}
          role={role}
          scorePercentBar={scorePercentBar}
          score={score}
          scoreToNextLvl={scoreToNextLvl}
          socialNetworks={socialNetworks}
        />
      </Wave>
    </S.AccountInformation>
  );
};

export default AccountInformation;
