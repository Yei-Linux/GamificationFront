import styled from "@emotion/styled";

export const TitleSection = styled.div<{
  $align?: string;
  $color?: string;
  $padding?: string;
  $font?: string;
}>`
  padding: ${({ $padding }) => $padding};
  font-family: ${({ $font }) => $font};

  &.flexBehavior {
    display: flex;
    justify-content: ${({ $align }) => $align};
  }

  * {
    color: ${({ $color }) => $color};
  }
`;
