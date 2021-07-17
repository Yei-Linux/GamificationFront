import styled from "@emotion/styled";

export const TitleDefaultWrapper = styled.div<{
  color?: string;
  align?: string;
  padding?: string;
  font?: string;
}>`
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
  font-family: ${(props) => props.font};

  * {
    color: ${(props) => props.color};
    font-weight: 500;
  }
`;
