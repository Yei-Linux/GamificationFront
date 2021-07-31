import { Button, Icon, List } from "gamification-library";
import React from "react";
import { NOTES_THEMES } from "../../data/mocks";
import { useArray } from "../../hooks/useArray";
import TitleDefault from "../../layouts/TitleDefault";
import { themeCustom } from "../../styles/theme";
import {
  NotesSiderBarContent,
  NotesSiderBarTitle,
  NotesSiderBarWrapper,
} from "./styles";

export interface NotesSiderBarProps {}

const NotesSiderBar = ({}: NotesSiderBarProps) => {
  const { value: themeNotes } = useArray(NOTES_THEMES);

  return (
    <NotesSiderBarWrapper>
      <NotesSiderBarTitle>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.primary.one}
          level="h2"
          text="Themes"
        />
      </NotesSiderBarTitle>
      <NotesSiderBarContent>
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
      </NotesSiderBarContent>
    </NotesSiderBarWrapper>
  );
};

export default NotesSiderBar;
