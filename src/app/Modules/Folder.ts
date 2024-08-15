import { Snippet } from '../Modules/Snippet';

export interface Folder {
  id: number;
  icon: string;
  nome: string;
  descrizione: string;
  dataCreazione: string;
  dataModifica: string;
  snippets: Snippet[] | null;
}
