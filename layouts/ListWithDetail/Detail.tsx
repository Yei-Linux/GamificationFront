import { Button, Drawer, Row } from "gamification-library";
import React, { Fragment, useState } from "react";
import { themeCustom } from "../../styles/theme";
import ListSiderBar from "../ListSiderBar";
import TitleDefault from "../TitleDefault";
import {
  DetailContainer,
  DetailContentTitle,
  DetailContentWrapper,
  DetailSideBarContainer,
  DetailViewAllButton,
} from "./style";

export interface DetailProps {
  children: React.ReactNode;
  title: string;
  items?: any[];
}

const Detail = ({ title, children, items = [] }: DetailProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Drawer onClose={toggle} open={isOpen} height="100%" width="400px">
        <DetailSideBarContainer>
          <ListSiderBar items={items} />
        </DetailSideBarContainer>
      </Drawer>

      <DetailContentWrapper>
        <DetailContentTitle>
          <Row justifyContent="space-between">
            <TitleDefault
              padding="0px"
              align="left"
              color={themeCustom.light.color.primary.one}
              level="h2"
              text={title}
            />

            <DetailViewAllButton>
              <Button onClick={toggle} width="NORMAL" border="MEDIUM">
                All Themes
              </Button>
            </DetailViewAllButton>
          </Row>
        </DetailContentTitle>
        <DetailContainer>{children}</DetailContainer>
      </DetailContentWrapper>
    </Fragment>
  );
};

export default Detail;
