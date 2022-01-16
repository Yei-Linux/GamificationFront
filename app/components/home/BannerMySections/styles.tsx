import styled from "@emotion/styled";
import { mediaQuery } from "@gamiui/standard";

export const MySectionItem = styled.div`
  display: flex;
  justify-content: center;

  .mysectionitem__card {
    max-width: 150px;
  }

  ${mediaQuery("lg")} {
    .mysectionitem__card {
      max-width: 350px;
    }
  }
`;
