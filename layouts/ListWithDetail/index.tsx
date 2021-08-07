import { Row, Col } from "gamification-library";
import React, { useState } from "react";
import ListSiderBar from "../ListSiderBar";
import Detail from "./Detail";
import {
  ListWithDetailWrapper,
  ListWithDetailSiderBarCondition,
} from "./style";

export interface ListWithDetailProps {
  children: React.ReactNode;
  items?: any[];
}

const ListWithDetail = ({ children, items }: ListWithDetailProps) => {
  const [title] = useState("Data Structures");

  return (
    <ListWithDetailWrapper>
      <Row alignItems="flex-start">
        <Col spacing="md" xs={12} sm={12} md={8} lg={8}>
          <Detail title={title} items={items}>
            {children}
          </Detail>
        </Col>

        <Col spacing="md" xs={12} sm={12} md={4} lg={4}>
          <ListWithDetailSiderBarCondition>
            <ListSiderBar items={items} />
          </ListWithDetailSiderBarCondition>
        </Col>
      </Row>
    </ListWithDetailWrapper>
  );
};

export default ListWithDetail;
