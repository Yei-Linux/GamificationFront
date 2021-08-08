import {
  Row,
  Sider,
  Image,
  Spacer,
  Title,
  Menu,
  Icon,
} from "gamification-library";
import React from "react";

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
        <Row>
          <Image
            style={{ borderRadius: "20em" }}
            alt="Topbar logo"
            width="60px"
            src={
              "https://res.cloudinary.com/teepublic/image/private/s--Y5DOrT6I--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1540143169/production/designs/3360948_0.jpg"
            }
          />
          <Spacer direction="right" />
          <Title level="h2">Hacking Learning</Title>
        </Row>
      }
    >
      <Menu>
        <Menu.SubMenu
          isOpen
          title="Home"
          href="/"
          icon={<Icon name="listitem" />}
        ></Menu.SubMenu>
        <Menu.SubMenu
          title="My account"
          href="/account"
          icon={<Icon name="listitem" />}
        ></Menu.SubMenu>
        <Menu.SubMenu
          title="My courses"
          href="/courses"
          icon={<Icon name="listitem" />}
        ></Menu.SubMenu>
        <Menu.SubMenu
          title="My Exams"
          href="/exams"
          icon={<Icon name="listitem" />}
        ></Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default MenuAside;
