import { Row, Col, Drawer } from "gamification-library";
import React, { Fragment, useState } from "react";
import { IPageListItem } from "../../../types/listItem";
import PageList from "../PageList";
import Detail from "./Detail";
import * as S from "./styles";

export interface PageDetailProps {
  title: string;
  items: IPageListItem[];
  listTitle: string;
  listButtonText: string;

  children: React.ReactNode;
  spacerSize?: 1 | 2 | 3 | 4 | 5;
}

const PageDetail = ({
  title,
  children,
  items,
  spacerSize = 5,
  listTitle,
  listButtonText,
}: PageDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Drawer onClose={toggle} open={isOpen} height="100%" width="400px">
        <S.DetailList>
          <PageList
            title={listTitle}
            items={items}
            buttonText={listButtonText}
          />
        </S.DetailList>
      </Drawer>

      <S.PageDetail>
        <Row alignItems="flex-start">
          <Col spacing="md" xs={12} sm={12} md={8} lg={8}>
            <Detail toggle={toggle} spacerSize={spacerSize} title={title}>
              {children}
            </Detail>
          </Col>

          <Col spacing="md" xs={12} sm={12} md={4} lg={4}>
            <S.ListDesktop>
              <PageList
                title={listTitle}
                items={items}
                buttonText={listButtonText}
              />
            </S.ListDesktop>
          </Col>
        </Row>
      </S.PageDetail>
    </Fragment>
  );
};

export default PageDetail;
