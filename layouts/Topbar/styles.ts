import styled from "@emotion/styled";
import { mediaQuery } from "gamification-library";
import { themeCustom } from "../../styles/theme";

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

export const TopbarWrapper = styled.div`
  font-family: "Righteous", cursive;
  border-bottom: 1px solid ${themeCustom.light.color.neutral.six};
  padding: 5px 10px;
  width: 100%;
  height: 100%;
`;
