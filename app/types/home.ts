import { ISectionItem } from "../components/commons/SectionList/SectionItem";

export interface IViewAllButton {
  hasViewAllButton: boolean;
  url: string | null;
}

export interface IMyActivity {
  title: string;
  iconId: string;
  sections: ISectionItem[];
  viewAllButton: IViewAllButton;
  prefixUrl: string
}
