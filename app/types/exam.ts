import { IQuestion } from "@gamiui/standard/lib/designSystem/atoms/Question/Question";
import { IOptions } from "@gamiui/standard/lib/designSystem/molecules/Options/Options";

export interface IQuestionSurvey {
  question: IQuestion;
  option: IOptions;
  questionIndex: number;
  isLastQuestion?: boolean;
}
