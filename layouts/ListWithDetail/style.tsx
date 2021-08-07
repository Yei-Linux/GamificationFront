import styled from "@emotion/styled";
import { mediaQuery } from "gamification-library";

export const ListWithDetailWrapper = styled.div`
  padding: 2rem;

  ${mediaQuery("md")} {
    padding: 5rem;
  }
`;

export const ListWithDetailSiderBarCondition = styled.div`
  display: none;

  ${mediaQuery("md")} {
    display: block;
  }
`;

export const DetailSideBarContainer = styled.div`
  padding: 1rem;
`;

export const DetailContentWrapper = styled.div``;

export const DetailContentTitle = styled.div`
  margin: 1rem 0 5rem 0;
`;

export const DetailContainer = styled.div`
  padding: 1rem;
`;


export const DetailViewAllButton = styled.div`
  display: block;

  ${mediaQuery("md")} {
    display: none;
  }
`;