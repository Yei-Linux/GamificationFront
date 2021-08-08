import React from "react";
import * as S from "./styles";

import {
  Avatar,
  Icon,
  Image,
  RichText,
  Row,
  Spacer,
  Title,
} from "gamification-library";

export interface TopbarProps {
  handleOpenMenu?: () => any;
}

const Topbar = ({ handleOpenMenu }: TopbarProps) => {
  return (
    <S.Topbar>
      <Row justifyContent="space-between">
        <S.TopbarLeft>
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
        </S.TopbarLeft>

        <S.TopbarRight>
          <S.PhoneRow>
            <Row>
              <Icon onClick={handleOpenMenu} name="menu" size="30px" />
            </Row>
          </S.PhoneRow>
          <S.DesktopRow>
            <Row>
              <Icon onClick={handleOpenMenu} name="menu" size="20px" />
              <Spacer direction="left" />
              <Icon name="notifications" size="20px" />
              <Spacer direction="left" />
              <Icon name="settings" size="20px" />
              <Spacer direction="left" />
              <Spacer direction="left" />
              <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
              <Spacer direction="left" />
              <RichText text="Yei Linux" />
            </Row>
          </S.DesktopRow>
        </S.TopbarRight>
      </Row>
    </S.Topbar>
  );
};

export default Topbar;
