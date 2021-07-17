import { Sliding } from "gamification-library";
import React, { useState } from "react";
import Instructions from "../../layouts/Instructions";
import ClassInstructionItem from "../ClassInstructionItem";
import { ClassInstructionContainer } from "./styles";

export interface ClassInstructionProps {}

const ClassInstruction = ({}: ClassInstructionProps) => {
  const [isCloseSliding, setIsCloseSliding] = useState(false);

  return (
    <Sliding initAnimationToClose={isCloseSliding}>
      <ClassInstructionContainer>
        <Instructions>
          <ClassInstructionItem />
          <ClassInstructionItem />
          <ClassInstructionItem
            hasButtonToFinish
            onClickButtonToFinish={() => setIsCloseSliding(true)}
          />
        </Instructions>
      </ClassInstructionContainer>
    </Sliding>
  );
};

export default ClassInstruction;
