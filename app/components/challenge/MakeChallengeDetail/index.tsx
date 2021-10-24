import classNames from "classnames";
import { Button, CodeView, TextEditor } from "gamification-library";
import React, { useState } from "react";
import { DUMMY_SAMPLE_EXAMPLE } from "../../../dummy/challenge";
import * as S from "./styles";

const MakeChallengeDetail = () => {
  const [valueCodeView, setValueCodeView] = useState(DUMMY_SAMPLE_EXAMPLE);
  const [value, setValue] = useState(DUMMY_SAMPLE_EXAMPLE);

  return (
    <S.MakeChallengeDetail>
      <S.MakeChallengeEditor
        className={classNames("flex", "justify-around", "wrap")}
      >
        <S.Editor>
          <TextEditor defaultValue={value} onChange={setValue} />
          <Button onClick={() => setValueCodeView(value)}>Save</Button>
        </S.Editor>

        <S.ChallengeView>
          <CodeView valueString={valueCodeView} />
        </S.ChallengeView>
      </S.MakeChallengeEditor>

      <S.ChallengeFooter>
        <Button>Publish</Button>
      </S.ChallengeFooter>
    </S.MakeChallengeDetail>
  );
};

export default MakeChallengeDetail;
