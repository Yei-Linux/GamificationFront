import styled from "@emotion/styled";

export const Section = styled.div<{ background: string }>`
  width: 100%;
  padding: 3rem 0px;
  background-color: ${({ background }) => background};
`;

export const Title = styled.div<{ color: string }>`
  padding: 1rem;
  text-align: center;
  font-family: "Righteous", cursive;

  * {
    color: ${({color}) => color};
    font-weight: 500;
  }
`;
