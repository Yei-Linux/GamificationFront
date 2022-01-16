import { Options } from "@gamiui/standard";
import React from "react";
import {
  DUMMY__QUESTION__CODE,
  DUMMY__SAMPLE__CODE,
} from "../../../dummy/challenge";
import * as S from "./styles";

const ChallengeProblem = () => {
  const handleChangeOption = (value: any) => {
    console.log(value);
  };

  return (
    <S.ChallengeProblem>
      <Options
        handleChangeOption={handleChangeOption}
        type="CODE"
        code={DUMMY__QUESTION__CODE}
        answer={DUMMY__SAMPLE__CODE}
      />
    </S.ChallengeProblem>
  );
};

export default ChallengeProblem;
