import { IOptions } from "gamification-library/src/designSystem/atoms/Options/Options";
import { IQuestion } from "gamification-library/src/designSystem/atoms/Question/Question";

export interface IQuestionSurvey {
  question: IQuestion;
  option: IOptions;
  questionIndex: number;
  isLastQuestion?: boolean;
}
