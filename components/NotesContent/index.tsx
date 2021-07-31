import { Button, Drawer, Row } from "gamification-library";
import React, { Fragment, useState } from "react";
import TitleDefault from "../../layouts/TitleDefault";
import { themeCustom } from "../../styles/theme";
import NotesSiderBar from "../NotesSideBar";
import NotesGroup from "../ui/NotesGroup";
import {
  NotesContainer,
  NotesContentTitle,
  NotesContentWrapper,
  NotesSiderBarContainer,
  NotesViewAllButton,
} from "./styles";

export interface NotesContentProps {}

const NotesContent = ({}: NotesContentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Drawer onClose={toggle} open={isOpen} height="100%" width="400px">
        <NotesSiderBarContainer>
          <NotesSiderBar />
        </NotesSiderBarContainer>
      </Drawer>

      <NotesContentWrapper>
        <NotesContentTitle>
          <Row justifyContent="space-between">
            <TitleDefault
              padding="0px"
              align="left"
              color={themeCustom.light.color.primary.one}
              level="h2"
              text="Data Structures"
            />

            <NotesViewAllButton>
              <Button onClick={toggle} width="NORMAL" border="MEDIUM">
                All Themes
              </Button>
            </NotesViewAllButton>
          </Row>
        </NotesContentTitle>
        <NotesContainer>
          <NotesGroup />
        </NotesContainer>
      </NotesContentWrapper>
    </Fragment>
  );
};

export default NotesContent;
