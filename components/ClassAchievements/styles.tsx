import styled from "@emotion/styled";
import { GridSection } from "../../styles/utilities/display";

export const ClassAchievementsWrapper = styled.div`
  margin: 2rem auto;
`;

export const ClassAchievementTitle = styled.div``;

export const ClassAchievementsContainer = styled.div`
  max-width: 350px;
  margin: 2rem auto;
  ${GridSection("auto-fit", "minmax(60px, 1fr)")}
`;

export const AchievementsCardContainer = styled.div`
  p {
    font-size: 15px;
    word-break: break-word;
  }
`;
