import styled from "@emotion/styled";
import { GridSection } from "../../../../styles/utilities/display";

export const Achievements = styled.div`
  margin: 2rem auto;
`;

export const Title = styled.div``;

export const Content = styled.div`
  max-width: 350px;
  margin: 2rem auto;
  ${GridSection("auto-fit", "minmax(60px, 1fr)")}
`;

export const CardContainer = styled.div`
  p {
    font-size: 15px;
    word-break: break-word;
  }
`;