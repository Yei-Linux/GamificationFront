import { IAchievementsItem } from "../components/commons/Achievements/AchievementsItem";
import { ITutor } from "../components/commons/TutorInfo";

export interface ISummary {
  id: string;
  name: string;
}

export interface ICourseDetail {
  id: string;
  title: string;
  description: string;

  tutor: ITutor;
  achievements: IAchievementsItem[];
  summary: ISummary[];
}
