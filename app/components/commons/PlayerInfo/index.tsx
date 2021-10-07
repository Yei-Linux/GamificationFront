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
        lvl="Level 10"
        userName="YeiLinux"
        experiencePercent={70}
        isShowOnlyImportantContent
      />
    </S.PlayerInfo>
  );
};

export default PlayerInfo;
