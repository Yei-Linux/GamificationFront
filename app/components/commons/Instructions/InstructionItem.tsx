import React from "react";
import { Row, Image, RichText, Button } from "gamification-library";
import TitleSection from "../../layouts/TitleSection";
import { themeCustom } from "../../../../styles/theme";

import * as S from "./styles";

type IClickButton = () => void;

export interface IInstructionItemProps {
  mainTitle: string;
  subTitle: string;
  description?: string;
  buttonText?: string;
  src: string;

  hasButtonToFinish?: boolean;
  onClickButtonToFinish?: IClickButton;
}

const InstructionItem = ({
  mainTitle,
  subTitle,
  description,
  src,
  buttonText = "Empezar",
  hasButtonToFinish = false,
  onClickButtonToFinish = () => {},
}: IInstructionItemProps) => {
  return (
    <S.InstructionItem className="keen-slider__slide">
      <S.InstructionsItemContainer>
        <TitleSection
          level="h3"
          color={themeCustom.light.color.primary.one}
          text={mainTitle}
        />
        
        <Row height="auto">
          <Image width="300px" alt="Instruction" src={src} />
        </Row>

        <Row height="auto">
          <TitleSection
            level="h3"
            color={themeCustom.light.color.secondary.three}
            text={subTitle}
          />
        </Row>

        {description && (
          <Row height="auto">
            <RichText textAlign="CENTER" text={description} />
          </Row>
        )}

        {hasButtonToFinish && (
          <Row height="auto">
            <S.FinishButton>
              <Button onClick={onClickButtonToFinish}>{buttonText}</Button>
            </S.FinishButton>
          </Row>
        )}
      </S.InstructionsItemContainer>
    </S.InstructionItem>
  );
};

export default InstructionItem;
