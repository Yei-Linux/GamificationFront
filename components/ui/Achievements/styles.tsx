import styled from "@emotion/styled";
import { GridSection } from "../../../styles/utilities/display";

export const AchievementsWrapper = styled.div`
  margin: 2rem auto;
`;

export const AchievementTitle = styled.div``;

export const AchievementsContainer = styled.div`
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
