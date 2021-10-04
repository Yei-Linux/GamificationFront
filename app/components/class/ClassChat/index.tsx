import { Chat } from "gamification-library";
import React from "react";
import { themeCustom } from "../../../../styles/theme";
import { DUMMY_CLASS_CHAT } from "../../../dummy/class";
import { useArray } from "../../../hooks/useArray";
import TitleSection from "../../layouts/TitleSection";

import * as S from "./styles";

export interface IClassChat {}

const ClassChat = ({}: IClassChat) => {
  const { value: messages, setValue: setMessages } = useArray(DUMMY_CLASS_CHAT);

  const onSubmitMessage = (value: string): any => {
    setMessages([
      ...messages,
      {
        isMe: true,
        author: null,
        textDetail: [
          {
            type: "text",
            text: value,
            timestamp: 1578366389250,
          },
        ],
      },
    ]);
  };

  return (
    <S.ClassChat>
      <S.Title>
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level="h2"
          text="Classroom Chat"
        />
      </S.Title>

      <Chat messages={messages} onSubmitMessage={onSubmitMessage} />
    </S.ClassChat>
  );
};

export default ClassChat;
