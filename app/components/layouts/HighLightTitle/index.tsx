import classNames from "classnames";
import * as React from "react";
import { themeCustom } from "../../../../styles/theme";
import TitleSection, { TLevels } from "../TitleSection";

import * as S from "./styles";

interface IHighLightTitle {
  title: string;
  level: TLevels;
  children?: React.ReactNode;
  rightHeader?: React.ReactNode;
}

const HighLightTitle = ({
  title,
  level,
  children,
  rightHeader,
}: IHighLightTitle) => {
  return (
    <S.HighLightTitle>
      <S.Header
        className={classNames("flex", "justify-between", "items-center")}
      >
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level={level}
          text={title}
        />
        {rightHeader}
      </S.Header>
      {children}
    </S.HighLightTitle>
  );
};

export default HighLightTitle;
