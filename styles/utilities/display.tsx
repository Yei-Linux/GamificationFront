import { css } from "@emotion/react";

export const GridSection = (
  autosizeType: "auto-fill" | "auto-fit" = "auto-fill",
  autosizeContent: string = "minmax(25rem, 1fr)"
) => css`
  display: grid;

  grid-gap: 1rem;
  grid-template-columns: ${`repeat(${autosizeType},${autosizeContent})`};
`;
