import styled from "@emotion/styled";
import { themeCustom } from "../../../../styles/theme";

export const Tutor = styled.div``;

export const TutorInfo = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.4em;
  background: ${themeCustom.light.color.neutral.eight};
  max-width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;
