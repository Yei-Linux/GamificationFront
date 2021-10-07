import styled from "@emotion/styled";
import { mediaQuery } from "gamification-library";
import { themeCustom } from "../../../../styles/theme";

export const TopbarLeft = styled.div``;

export const TopbarRight = styled.div``;

export const PhoneRow = styled.div`
  display: block;

  ${mediaQuery("sm")} {
    display: none;
  }
`;

export const DesktopRow = styled.div`
  display: none;

  ${mediaQuery("sm")} {
    display: block;
  }
`;

export const Topbar = styled.header`
  font-family: "Righteous", cursive;
  border-bottom: 1px solid ${themeCustom.light.neutral[500]};
  padding: 5px 10px;
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
