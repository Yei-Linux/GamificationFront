import { Button, Row, Link as CustomLink } from "@gamiui/standard";
import React from "react";
import { INoteItemGeneralProps } from "../../../types/notes";
import { IAchievementsItem } from "../../commons/Achievements/AchievementsItem";
import { ITutor } from "../../commons/TutorInfo";
import HighLightTitle from "../../layouts/HighLightTitle";
import ClassChat from "../ClassChat";
import ClassDetails from "../ClassDetail";
import ClassNotes from "../ClassNotes";
import ClassVideo from "../ClassVideo";

import Link from "next/link";
import * as S from "./styles";

export interface IClassPlatform {
  id: string;
  title: string;
  tutor: ITutor;
  examId: string;
  achievements: IAchievementsItem[];
  notes: INoteItemGeneralProps[];
  urlVideo: string;
}

const ClassPlatform = ({
  id,
  title,
  tutor,
  achievements,
  notes,
  urlVideo,
  examId,
}: IClassPlatform) => {
  const getUrlExamId = (examId: string): string => `/exams/${examId}`;

  return (
    <S.ClasPlatForm>
      <S.ClassTitle>
        <HighLightTitle
          title={`Class: ${title}`}
          level="h2"
          rightHeader={
            <Link href={getUrlExamId(examId)} passHref>
              <CustomLink href={getUrlExamId(examId)}>
                <Button variant="primary" border="md">
                  Ready to Exam
                </Button>
              </CustomLink>
            </Link>
          }
        />
      </S.ClassTitle>
      <Row justifyContent="space-around" alignItems="flex-start">
        <S.ClassInformation>
          <ClassDetails
            id={id}
            title={title}
            tutor={tutor}
            achievements={achievements}
          />
          <ClassNotes notes={notes} />
        </S.ClassInformation>

        <S.ClassContent>
          <ClassVideo urlVideo={urlVideo} />
          <ClassChat />
        </S.ClassContent>
      </Row>
    </S.ClasPlatForm>
  );
};

export default ClassPlatform;
