import { CodeView } from "@gamiui/standard";
import React, { useState } from "react";
import { DUMMY_SAMPLE_EXAMPLE } from "../../../dummy/challenge";
import * as S from "./styles";

const ChallengeSolution = () => {
  const [valueCodeView] = useState(DUMMY_SAMPLE_EXAMPLE);

  return (
    <S.ChallengeSolution>
      <CodeView valueString={valueCodeView} />
    </S.ChallengeSolution>
  );
};

export default ChallengeSolution;
