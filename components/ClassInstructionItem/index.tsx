import { Row, Title, Image, RichText, Button } from "gamification-library";
import React from "react";
import { TitleContainer } from "../../layouts/Section/styles";
import { themeCustom } from "../../styles/theme";
import {
  ClassInstructionItemWrapper,
  ClassInstructionsItemContainer,
  FinishButtonContainer,
} from "./styles";

export interface ClassInstructionItemProps {
  hasButtonToFinish?: boolean;
  onClickButtonToFinish?: () => any;
}

const ClassInstructionItem = ({
  hasButtonToFinish = false,
  onClickButtonToFinish = () => {},
}: ClassInstructionItemProps) => {
  return (
    <ClassInstructionItemWrapper className="keen-slider__slide">
      <ClassInstructionsItemContainer>
        <TitleContainer color={themeCustom.light.color.primary.one}>
          <Title>Preparado para escuchar la clase</Title>
        </TitleContainer>
        <Row height="auto">
          <Image
            width="300px"
            alt="Instruction"
            src="https://i.ibb.co/7rxmRdq/009-app-user-colour.jpg"
          />
        </Row>
        <Row height="auto">
          <TitleContainer color={themeCustom.light.color.secondary.three}>
            <Title level="h3">
              Sigue estas instrucciones para que no te pierdas ningun detalle
            </Title>
          </TitleContainer>
        </Row>
        <Row height="auto">
          <RichText
            textAlign="CENTER"
            text="Recuerda que mientras mas clases tengas mas puntos acumulas"
          />
        </Row>

        {hasButtonToFinish && (
          <Row height="auto">
            <FinishButtonContainer>
              <Button onClick={onClickButtonToFinish}>Empezar</Button>
            </FinishButtonContainer>
          </Row>
        )}
      </ClassInstructionsItemContainer>
    </ClassInstructionItemWrapper>
  );
};

export default ClassInstructionItem;
