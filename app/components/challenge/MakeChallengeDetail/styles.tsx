import styled from "@emotion/styled";
import { HighLight } from "../../../../styles/components/layouts";
import { themeCustom } from "../../../../styles/theme";

export const MakeChallengeDetail = styled.div`
  margin: 1rem 0;
`;

export const MakeChallengeEditor = styled.div``;

export const Editor = styled.div`
  background: ${themeCustom.light.primary.hawkesBlue};
  border-radius: 0.5em;
  margin: 1rem 0;
  padding: 1rem;
`;

export const ChallengeView = styled.div`
  margin: 1rem 0;
`;

export const ChallengeFooter = styled.div`
  ${HighLight()}
  margin: 1rem 0;
`;
