import {
  Row,
  Sider,
  Spacer,
  Title,
  Menu,
  Icon,
  Link as CustomLink,
} from "gamification-library";
import React from "react";

import Link from "next/link";

export interface MenuAsideProps {
  onClose: () => any;
  open: boolean;
}

const MenuAside = ({ onClose, open }: MenuAsideProps) => {
  return (
    <Sider
      onClose={onClose}
      open={open}
      header={
        <Link href="/" passHref>
          <CustomLink href="/">
            <Row>
              <Icon name="brain" size="40px" />
              <Spacer direction="right" />
              <Title level="h2">Hacking Learning</Title>
            </Row>
          </CustomLink>
        </Link>
      }
    >
      <Menu>
        <Menu.SubMenu
          isOpen
          title="Home"
          href="/"
          icon={<Icon name="bullet__item" />}
        ></Menu.SubMenu>
        <Menu.SubMenu
          title="My account"
          href="/users/yeilinux"
          icon={<Icon name="bullet__item" />}
        ></Menu.SubMenu>
        <Menu.SubMenu
          title="My courses"
          href="/courses"
          icon={<Icon name="bullet__item" />}
        ></Menu.SubMenu>
        <Menu.SubMenu
          title="My Exams"
          href="/exams"
          icon={<Icon name="bullet__item" />}
        ></Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default MenuAside;
