import classNames from "classnames";
import { Link, RichText } from "gamification-library";
import React from "react";
import { themeCustom } from "../../../../styles/theme";
import TitleSection from "../../layouts/TitleSection";
import * as S from "./styles";

const ChallengeInfo = () => {
  return (
    <S.ChallengeInfo>
      <S.Header
        className={classNames("flex", "justify-between", "items-center")}
      >
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level="h2"
          text="Whats your name?"
        />
      </S.Header>

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
    </S.ChallengeInfo>
  );
};

export default ChallengeInfo;
