import { Button, Row, Spacer } from "gamification-library";
import React from "react";
import { themeCustom } from "../../../../styles/theme";
import TitleSection from "../../layouts/TitleSection";

import * as S from "./styles";

type IToggle = () => void;

export interface DetailProps {
  children: React.ReactNode;
  title: string;
  buttonText?: string;
  spacerSize?: 1 | 2 | 3 | 4 | 5;
  toggle: IToggle;
}

const Detail = ({
  title,
  children,
  buttonText = "All",
  spacerSize = 5,
  toggle,
}: DetailProps) => {
  return (
    <S.Detail>
      <S.DetailTitle>
        <Row justifyContent="space-between">
          <TitleSection
            padding="0px"
            align="left"
            color={themeCustom.light.primary.jordyBlue}
            level="h2"
            text={title}
          />

          <S.DetailViewAllButton>
            <Button onClick={toggle} width="auto" border="md">
              {buttonText}
            </Button>
          </S.DetailViewAllButton>
        </Row>
      </S.DetailTitle>

      <Spacer direction="bottom" size={spacerSize} />

      <S.DetailContent>{children}</S.DetailContent>
    </S.Detail>
  );
};

export default Detail;
