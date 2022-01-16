import classNames from "classnames";
import { Empty, Image, RichText, Row, Title } from "@gamiui/standard";
import React from "react";
import { DUMMY__BADGES } from "../../../dummy/badges";

import * as S from "./styles";

export interface IIcon {
  name: "strategy" | "faster" | "winner" | "competitive";
  lvl: number;
}

export interface IBadge {
  title: string;
  icons: IIcon[];
}

export interface IAccountBadges {
  badges: IBadge[];
}

const AccountBadges = ({ badges }: IAccountBadges) => {
  return (
    <S.AccountBadges>
      <S.Title>
        <Title textAlign="center" fontWeight="light" level="h3">
          My Badges
        </Title>
      </S.Title>

      <S.BadgeList>
        {badges.map(({ title, icons }: IBadge, index: number) => (
          <S.BadgeSection key={index}>
            <Title level="h4">{title}</Title>
            <S.Badge>
              {!icons.length ? (
                <Empty size="50px" type="sad" />
              ) : (
                <Row justifyContent="flex-start">
                  {icons.map(({ name, lvl }: IIcon, index: number) => (
                    <S.BadgeItem key={index}>
                      <Image
                        alt="Badge"
                        width="73px"
                        height="70px"
                        src={DUMMY__BADGES[name].src}
                      >
                        <S.BadgeLvl>
                          <RichText
                            className={classNames("badge__lvl__text")}
                            textAlign="center"
                            width="full"
                            fontWeight="bold"
                            text={`Lvl ${lvl}`}
                          />
                        </S.BadgeLvl>
                      </Image>
                    </S.BadgeItem>
                  ))}
                </Row>
              )}
            </S.Badge>
          </S.BadgeSection>
        ))}
      </S.BadgeList>
    </S.AccountBadges>
  );
};

export default AccountBadges;
