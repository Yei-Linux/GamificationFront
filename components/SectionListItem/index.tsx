import { Button, Icon, List } from "gamification-library";
import React from "react";
import { SectionItemWrapper } from "./styles";

export interface SectionListItemProps {}

const SectionListItem = () => {
  return (
    <SectionItemWrapper>
      <List.Item
        noBorder
        avatar={<Icon size="25px" name="book" />}
        title="Main title"
        description="Description"
      >
        <Button width="NORMAL" border="ROUNDED">
          Go!!
        </Button>
      </List.Item>
    </SectionItemWrapper>
  );
};

export default SectionListItem;
