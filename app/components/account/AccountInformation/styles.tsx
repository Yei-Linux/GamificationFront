import styled from "@emotion/styled";
import { themeCustom } from "../../../../styles/theme";

export const AccountInformation = styled.div``;

export const Profile = styled.div<{ $background: string }>`
  background-color: ${({ $background }) => $background};

  padding: 1rem;
`;

export const ProfileName = styled.div<{ $color: string }>`
  font-family: "Righteous", cursive;
  color: ${({ $color }) => $color};
`;

export const LvlTagAccountItem = styled.div`
  margin: 2px 5px;
`;

export const SocialNetworkItem = styled.div`
  margin: 0 5px;
  background: ${themeCustom.light.neutral[800]};
  width: 30px;
  height: 30px;
  border-radius: 4em;
`;
