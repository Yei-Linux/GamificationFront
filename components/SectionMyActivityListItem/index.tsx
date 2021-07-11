import { Button, Icon, List } from "gamification-library";
import React from "react";
import { SectionMyActivityListItemWrapper } from "./styles";

export interface SectionMyActivityListItemProps {}

const SectionMyActivityListItem = () => {
  return (
    <SectionMyActivityListItemWrapper>
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
    </SectionMyActivityListItemWrapper>
  );
};

export default SectionMyActivityListItem;
