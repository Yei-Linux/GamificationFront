import classNames from "classnames";
import { Link, RichText } from "gamification-library";
import React from "react";
import HighLightTitle from "../../layouts/HighLightTitle";
import * as S from "./styles";

const ChallengeInfo = () => {
  return (
    <HighLightTitle title="Whats your name?" level="h2">
      <S.Info className={classNames("flex", "wrap", "justify-around ")}>
        <S.InfoItem className={classNames("flex", "justify-between")}>
          <RichText fontWeight="medium" text="Author:" textAlign="left" />
          <Link href="/account" isExternal>
            <RichText text="YeiLinux" textAlign="right" />
          </Link>
        </S.InfoItem>
        <S.InfoItem className={classNames("flex", "justify-between")}>
          <RichText fontWeight="medium" text="Difficulty:" textAlign="left" />
          <RichText text="Easy" textAlign="right" />
        </S.InfoItem>
        <S.InfoItem className={classNames("flex", "justify-between")}>
          <RichText
            fontWeight="medium"
            text="Max Score you can win:"
            textAlign="left"
          />
          <RichText text="10" textAlign="right" />
        </S.InfoItem>
      </S.Info>
    </HighLightTitle>
  );
};

export default ChallengeInfo;
