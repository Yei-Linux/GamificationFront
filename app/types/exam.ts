import { IQuestion } from "gamification-library/lib/designSystem/atoms/Question/Question";
import { IOptions } from "gamification-library/lib/designSystem/molecules/Options/Options";

export interface IQuestionSurvey {
  question: IQuestion;
  option: IOptions;
  questionIndex: number;
  isLastQuestion?: boolean;
}
