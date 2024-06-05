import { Snippet } from '../Modules/Snippet';

export interface Folder {
  id: number;
  icon: string;
  name: string;
  dataCreazione: string;
  dataModifica: string;
  content: Snippet[] | null;
}
