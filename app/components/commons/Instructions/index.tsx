import { Slider, Sliding } from "@gamiui/standard";
import React from "react";
import InstructionItem from "./InstructionItem";

import * as S from "./styles";

export interface InstructionsProps {
  children: React.ReactNode;
  isCloseSliding: boolean;
}

const Instructions = ({
  children,
  isCloseSliding = false,
}: InstructionsProps) => {
  return (
    <Sliding initAnimationToClose={isCloseSliding}>
      <S.Instructions>
        <Slider
          slidesPerView={{
            phone: 1,
            tablet: 1,
            laptop: 1,
            desktop: 1,
          }}
        >
          {children}
        </Slider>
      </S.Instructions>
    </Sliding>
  );
};

Instructions.Item = InstructionItem;

export default Instructions;
