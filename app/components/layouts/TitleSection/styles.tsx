import styled from "@emotion/styled";

export const TitleSection = styled.div<{
  color?: string;
  padding?: string;
  font?: string;
}>`
  padding: ${({ padding }) => padding};
  font-family: ${({ font }) => font};

  * {
    color: ${({ color }) => color};
  }
`;