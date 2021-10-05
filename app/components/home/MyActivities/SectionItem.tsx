import { Button, Icon, List } from "gamification-library";
import React from "react";
import * as S from "./styles";

export interface ISectionItem {
  title: string;
  description: string;
  buttonText?: string;
}

const SectionItem = ({ title, description, buttonText }: ISectionItem) => {
  return (
    <S.SectionItem>
      <List.Item
        noBorder
        avatar={<Icon size="25px" name="book" />}
        title={title}
        description={description}
      >
        <Button width="auto" border="lg">
          {buttonText}
        </Button>
      </List.Item>
    </S.SectionItem>
  );
};

export default SectionItem;
