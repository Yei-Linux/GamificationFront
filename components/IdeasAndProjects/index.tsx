import { Row, Title, FeaturedCard, RichText } from "gamification-library";
import * as React from "react";
import { TitleContainer } from "../MySections/styles";
import { IdeasAndProjectsItem, IdeasAndProjectsWrapper } from "./styles";

export interface IdeasAndProjectsProps {}

const IdeasAndProjects = ({}: IdeasAndProjectsProps) => {
  return (
    <IdeasAndProjectsWrapper>
      <TitleContainer>
        <Title level="h2">Proyectos e Ideas</Title>
      </TitleContainer>

      <Row>
        <IdeasAndProjectsItem>
          <FeaturedCard
            text={
              <div>
                <Title level="h3">Title</Title>
                <RichText text="Description" />
              </div>
            }
          />
        </IdeasAndProjectsItem>

        <IdeasAndProjectsItem>
          <FeaturedCard
            themeType="spring"
            text={
              <div>
                <Title level="h3">Title</Title>
                <RichText text="Description" />
              </div>
            }
          />
        </IdeasAndProjectsItem>

        <IdeasAndProjectsItem>
          <FeaturedCard
            themeType="skin"
            text={
              <div>
                <Title level="h3">Title</Title>
                <RichText text="Description" />
              </div>
            }
          />
        </IdeasAndProjectsItem>
        <IdeasAndProjectsItem>
          <FeaturedCard
            themeType="earth"
            text={
              <div>
                <Title level="h3">Title</Title>
                <RichText text="Description" />
              </div>
            }
          />
        </IdeasAndProjectsItem>
      </Row>
    </IdeasAndProjectsWrapper>
  );
};

export default IdeasAndProjects;
