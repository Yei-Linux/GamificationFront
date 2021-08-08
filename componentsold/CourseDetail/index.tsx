import {
  Avatar,
  FeaturedCard,
  List,
  Spacer,
  Title,
} from "gamification-library";
import React from "react";
import TitleDefault from "../../app/components/layouts/TitleSection";
import { themeCustom } from "../../styles/theme";
import { TutorInfoContainer } from "../ClassInformationHeader/styles";
import Achievements from "../ui/Achievements";
import {
  CourseContentClasses,
  CourseDetailDescription,
  CourseDetailTutor,
  CourseDetailWrapper,
} from "./styles";

export interface CourseDetailProps {
  description: string;
}

const CourseDetail = ({ description }: CourseDetailProps) => {
  return (
    <CourseDetailWrapper>
      <CourseDetailDescription>{description}</CourseDetailDescription>

      <Spacer direction="bottom" />

      <CourseDetailTutor>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.secondary.three}
          level="h4"
          text="Know more about your teacher"
        />

        <Spacer direction="bottom" />

        <TutorInfoContainer>
          <List.Item
            noBorder
            avatar={
              <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png" />
            }
            title="Rhan Kidder"
            description="Course Tutor"
          />
        </TutorInfoContainer>
      </CourseDetailTutor>

      <Achievements title="What personal skills do you improve in this course">
        <Achievements.Item titleItem="Visual" text="Videos,etc" />
        <Achievements.Item titleItem="Auditivo" text="Audios,etc" />
        <Achievements.Item titleItem="Memoria" text="Memorizar,etc" />
      </Achievements>

      <CourseDetailTutor>
        <TitleDefault
          padding="0px"
          align="left"
          color={themeCustom.light.color.secondary.three}
          level="h4"
          text="Classes of this course"
        />

        <Spacer direction="bottom" />

        <CourseContentClasses>
          <FeaturedCard
            text={
              <div>
                <Title level="h3">Basic Algotithms</Title>
              </div>
            }
          />
          <Spacer direction="bottom" />
          <FeaturedCard
            text={
              <div>
                <Title level="h3">Basic Algotithms</Title>
              </div>
            }
          />
          <Spacer direction="bottom" />
          <FeaturedCard
            text={
              <div>
                <Title level="h3">Basic Algotithms</Title>
              </div>
            }
          />
        </CourseContentClasses>
      </CourseDetailTutor>
    </CourseDetailWrapper>
  );
};

export default CourseDetail;
