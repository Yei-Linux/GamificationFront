import styled from "@emotion/styled";
import { Icon, Steps } from "gamification-library";
import { themeCustom } from "../../../../styles/theme";

export const SignViews = styled.div``;

export const Card = styled.div``;

export const CardBody = styled.div`
  max-width: 300px;
  background-color: ${themeCustom.light.color.neutral.eight};
  h5 {
    color: ${themeCustom.light.color.neutral.five};
  }
  padding: 1rem 0;
`;

export const ArrowBack = styled(Icon)`
  padding: 1rem;
`;

export const StepsSignUp = styled(Steps)`
  max-width: inherit;
`;
