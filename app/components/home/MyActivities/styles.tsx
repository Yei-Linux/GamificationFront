import styled from "@emotion/styled";
import { Link } from "gamification-library";
import { GridSection } from "../../../../styles/utilities/display";

export const MyActivities = styled.div`
  ${GridSection("auto-fit")}
`;

export const Item = styled.div``;

export const SectionItem = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.4em;
  width: 80%;
  margin: 1rem 0;
  max-width: 350px;
`;

export const SectionList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ViewAllLink = styled(Link)`
  text-decoration: underline;
`