import styled from "@emotion/styled";
import { themeCustom } from "../../../../styles/theme";

export const GameItem = styled.div`
  width: 300px;
  height: 330px;
  margin: 1rem;
  background: #f1f5ff;
  border-radius: 0.4em;
`;

export const AccountSkills = styled.div`
  padding: 1rem;
`;

export const Section = styled.div``;

export const Title = styled.div`
  font-family: "Righteous", cursive;
`;

export const AccountBadges = styled.div`
  padding: 1rem;
`;

export const BadgeList = styled.ul``

export const BadgeSection = styled.li`
  width: 100%;
  margin: 1rem;
`;

export const Badge = styled.div`
  padding: 1rem;
`;

export const BadgeItem = styled.div`
  position: relative;
`;

export const BadgeLvl = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3px;

  .badge__lvl__text {
    color: ${themeCustom.light.neutral[800]};
  }
`;
