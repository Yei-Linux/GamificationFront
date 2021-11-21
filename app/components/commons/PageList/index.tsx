import { Button, Icon, Link as CustomLink, List } from "gamification-library";
import React from "react";
import { useArray } from "../../../hooks/useArray";
import { themeCustom } from "../../../../styles/theme";

import Link from "next/link";
import * as S from "./styles";
import TitleSection from "../../layouts/TitleSection";
import { IPageListItem } from "../../../types/listItem";

export interface PageListProps {
  title: string;
  buttonText?: string;
  prefixUrl: string;
  items: IPageListItem[];
}

const PageList = ({
  title,
  items,
  buttonText = "View",
  prefixUrl,
}: PageListProps) => {
  const { value: itemsList } = useArray(items ?? []);

  return (
    <S.PageList>
      <S.Header>
        <TitleSection
          padding="0px"
          align="left"
          color={themeCustom.light.primary.jordyBlue}
          level="h2"
          text={title}
        />
      </S.Header>

      <S.Content>
        {itemsList.map(
          ({ title, description, id }: IPageListItem, index: number) => (
            <List.Item
              key={index}
              noBorder
              avatar={<Icon size="25px" name="book" />}
              title={title}
              description={description}
            >
              <Link href={`${prefixUrl}/${id}`} passHref>
                <CustomLink href={`${prefixUrl}/${id}`}>
                  <Button width="auto" border="lg">
                    {buttonText}
                  </Button>
                </CustomLink>
              </Link>
            </List.Item>
          )
        )}
      </S.Content>
    </S.PageList>
  );
};

export default PageList;
