import React from "react";
import { themeCustom } from "../../../../styles/theme";
import MainAccountInformation from "../../account/AccountInformation/MainAccountInformation";

import * as S from "./styles";

const PlayerInfo = () => {
  return (
    <S.PlayerInfo>
      <MainAccountInformation
        background={themeCustom.light.neutral[800]}
        color={themeCustom.light.neutral[0]}
        lvl={10}
        userName="YeiLinux"
        role="Frontend Developer"
        scorePercentBar={70}
        score={1500}
        scoreToNextLvl={50}
        isShowOnlyImportantContent
      />
    </S.PlayerInfo>
  );
};

export default PlayerInfo;
