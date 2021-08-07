import { Button, Icon, List } from "gamification-library";
import React from "react";
import { NOTES_THEMES } from "../../data/mocks";
import { useArray } from "../../hooks/useArray";
import TitleDefault from "../TitleDefault";
import { themeCustom } from "../../styles/theme";
import {
  ListSiderBarContent,
  ListSiderBarTitle,
  ListSiderBarWrapper,
} from "./styles";

export interface ListSiderBarProps {
  items?: any[];
}

const ListSiderBar = ({ items }: ListSiderBarProps) => {
  const { value: themeNotes } = useArray(items ?? []);

  return (
    <ListSiderBarWrapper>
      <ListSiderBarTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text="Themes"
        />
      </ListSiderBarTitle>
      <ListSiderBarContent>
        {themeNotes?.map((theme: any, index: number) => (
          <List.Item
            key={index}
            noBorder
            avatar={<Icon size="25px" name="book" />}
            title={theme?.title}
            description={theme?.description}
          >
            <Button width="NORMAL" border="ROUNDED">
              View
            </Button>
          </List.Item>
        ))}
      </ListSiderBarContent>
    </ListSiderBarWrapper>
  );
};

ListSiderBar.defaultProps = {
  items: NOTES_THEMES,
};

export default ListSiderBar;
