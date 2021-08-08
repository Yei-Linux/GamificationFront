import { Button, Icon, List } from "gamification-library";
import React from "react";
import { useArray } from "../../../hooks/useArray";
import { themeCustom } from "../../../../styles/theme";

import * as S from "./styles";
import TitleSection from "../../layouts/TitleSection";
import { IPageListItem } from "../../../types/listItem";

export interface PageListProps {
  title: string;
  buttonText?: string;
  items: IPageListItem[];
}

const PageList = ({ title, items, buttonText = "View" }: PageListProps) => {
  const { value: itemsList } = useArray(items ?? []);

  return (
    <S.PageList>
      <S.Header>
        <TitleSection
          padding="0px"
          align="LEFT"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text={title}
        />
      </S.Header>

      <S.Content>
        {itemsList.map((item: IPageListItem, index: number) => (
          <List.Item
            key={index}
            noBorder
            avatar={<Icon size="25px" name="book" />}
            title={item.title}
            description={item.description}
          >
            <Button width="NORMAL" border="ROUNDED">
              {buttonText}
            </Button>
          </List.Item>
        ))}
      </S.Content>
    </S.PageList>
  );
};

export default PageList;
