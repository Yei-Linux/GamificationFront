import { ISectionItem } from "../components/home/MyActivities/SectionItem";

export interface IMyActivity {
    title: string
    iconId: string
    sections: ISectionItem[]
}