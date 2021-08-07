import React from "react";
import Achievements from "../ui/Achievements";
import { CourseDetailDescription, CourseDetailWrapper } from "./styles";

export interface CourseDetailProps {
  description: string;
}

const CourseDetail = ({ description }: CourseDetailProps) => {
  return (
    <CourseDetailWrapper>
      <CourseDetailDescription>{description}</CourseDetailDescription>
      
      <Achievements title="What personal skills do you improve in this course">
        <Achievements.Item titleItem="Visual" text="Videos,etc" />
        <Achievements.Item titleItem="Auditivo" text="Audios,etc" />
        <Achievements.Item titleItem="Memoria" text="Memorizar,etc" />
      </Achievements>
    </CourseDetailWrapper>
  );
};

export default CourseDetail;
