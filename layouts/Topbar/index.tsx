import React from "react";
import {
  Avatar,
  Icon,
  Image,
  RichText,
  Row,
  Spacer,
  Title,
} from "gamification-library";
import {
  DesktopRow,
  PhoneRow,
  TopbarLeft,
  TopbarRight,
  TopbarWrapper,
} from "./styles";

export interface TopbarProps {}

const Topbar = ({}: TopbarProps) => {
  return (
    <TopbarWrapper>
      <Row justifyContent="space-between">
        <TopbarLeft>
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
        </TopbarLeft>

        <TopbarRight>
          <PhoneRow>
            <Row>
              <Icon name="menu" size="30px" />
            </Row>
          </PhoneRow>
          <DesktopRow>
            <Row>
              <Icon name="notifications" size="20px" />
              <Spacer direction="left" />
              <Icon name="settings" size="20px" />
              <Spacer direction="left" />
              <Spacer direction="left" />
              <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
              <Spacer direction="left" />
              <RichText text="Yei Linux" />
            </Row>
          </DesktopRow>
        </TopbarRight>
      </Row>
    </TopbarWrapper>
  );
};

export default Topbar;
