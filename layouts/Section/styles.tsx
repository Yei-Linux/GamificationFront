import styled from "@emotion/styled";

export const SectionWrapper = styled.div<{ background: string }>`
  width: 100%;
  padding: 3rem 0px;
  background-color: ${(props) => props.background};
`;

export const TitleContainer = styled.div<{ color: string }>`
  padding: 1rem;
  text-align: center;
  font-family: "Righteous", cursive;

  * {
    color: ${(props) => props.color};
    font-weight: 500;
  }
`;
