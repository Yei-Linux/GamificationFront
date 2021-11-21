import { Button, Icon, List, Link as CustomLink } from "gamification-library";
import React from "react";

import Link from "next/link";
import * as S from "./styles";

export interface ISectionItem {
  title: string;
  description: string;
  id?: string;
}

interface ISectionItemComponent extends ISectionItem {
  url: string;
}

const SectionItem = ({ title, description, url }: ISectionItemComponent) => {
  return (
    <S.SectionItem>
      <List.Item
        noBorder
        avatar={<Icon size="25px" name="book" />}
        title={title}
        description={description}
      >
        <Link href={url} passHref>
          <CustomLink href={url}>
            <Button width="auto" border="lg">
              Go!
            </Button>
          </CustomLink>
        </Link>
      </List.Item>
    </S.SectionItem>
  );
};

export default SectionItem;
