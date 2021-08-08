import styled from "@emotion/styled";
import { mediaQuery } from "gamification-library";

export const PageDetail = styled.div`
  padding: 2rem;

  ${mediaQuery("md")} {
    padding: 5rem;
  }
`;

export const ListDesktop = styled.div`
  display: none;

  ${mediaQuery("md")} {
    display: block;
  }
`;

export const DetailList= styled.div`
  padding: 1rem;
`;

export const Detail = styled.div``;

export const DetailTitle = styled.div`
  margin: 1rem 0;
`;

export const DetailContent = styled.div`
  padding: 1rem;
`;

export const DetailViewAllButton = styled.div`
  display: block;
  margin-top: 1rem;

  ${mediaQuery("md")} {
    display: none;
  }
`;
