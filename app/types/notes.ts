export interface INoteItemGeneralProps {
  id: string | number;
  title?: string;
  description?: string;
}

export type IEventNote = (value: string) => void;
export type ISaveEditNote = () => void;
export type IDeleteNote = (value: number | string) => void;
