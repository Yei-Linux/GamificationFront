import { Icon, Row, Spacer, Title } from "gamification-library";
import React, { Fragment } from "react";

import * as S from "./styles";

export interface IIcon {
  name: string;
}

export interface IBadge {
  title: string;
  icons: IIcon[];
}

export interface IAccountAchieves {
  badges: IBadge[];
}

const AccountAchieves = ({ badges }: IAccountAchieves) => {
  return (
    <S.AccountAchieves>
      <S.Title>
        <Title textAlign="CENTER" fontWeight="LIGHT" level="h3">
          My Achieves
        </Title>
      </S.Title>

      {badges.map(({ title, icons }: IBadge, index: number) => (
        <S.AchieveSection key={index}>
          <Title level="h4">{title}</Title>
          <S.Badge>
            <Row justifyContent="flex-start">
              {icons.map(({ name }: IIcon, index: number) => (
                <Fragment key={index}>
                  <Icon size="40px" name={name} />
                  <Spacer direction="bottom"/>
                </Fragment>
              ))}
            </Row>
          </S.Badge>
        </S.AchieveSection>
      ))}
    </S.AccountAchieves>
  );
};

export default AccountAchieves;
