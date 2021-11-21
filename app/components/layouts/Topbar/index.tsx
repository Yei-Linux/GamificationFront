import React from "react";
import * as S from "./styles";

import {
  Avatar,
  Icon,
  RichText,
  Row,
  Spacer,
  Title,
  Link as CustomLink,
} from "gamification-library";

import Link from "next/link";

export interface TopbarProps {
  handleOpenMenu?: () => any;
}

const Topbar = ({ handleOpenMenu }: TopbarProps) => {
  return (
    <S.Topbar>
      <Row justifyContent="space-between">
        <S.TopbarLeft>
          <Link href="/" passHref>
            <CustomLink href="/">
              <Row>
                <Icon name="brain" size="30px" />
                <Spacer direction="right" />
                <Title level="h2">Hacking Learning</Title>
              </Row>
            </CustomLink>
          </Link>
        </S.TopbarLeft>

        <S.TopbarRight>
          <S.PhoneRow>
            <Row>
              <Icon onClick={handleOpenMenu} name="hamburger" size="30px" />
            </Row>
          </S.PhoneRow>
          <S.DesktopRow>
            <Row>
              <Icon onClick={handleOpenMenu} name="hamburger" size="20px" />
              <Spacer direction="left" />
              <Icon name="remind" size="20px" />
              <Spacer direction="left" />

              <Link href="/settings" passHref>
                <CustomLink href="/settings">
                  <Icon name="setting" size="20px" />
                </CustomLink>
              </Link>
              <Spacer direction="left" />
              <Spacer direction="left" />
              <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
              <Spacer direction="left" />

              <Link href="/users/yeilinux" passHref>
                <CustomLink href="/users/yeilinux">
                  <RichText text="Yei Linux" />
                </CustomLink>
              </Link>
            </Row>
          </S.DesktopRow>
        </S.TopbarRight>
      </Row>
    </S.Topbar>
  );
};

export default Topbar;
