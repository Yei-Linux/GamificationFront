export interface INoteItemGeneralProps {
  id: string | number;
  title?: string;
  text?: string;
}

export type IEventNote = (value: string) => void;
export type ISaveEditNote = () => void;
export type IDeleteNote = (value: number | string) => void;
