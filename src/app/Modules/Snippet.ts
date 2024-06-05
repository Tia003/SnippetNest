import { Tags } from './Tag';
import { SnippetContent } from '../Modules/SnippetContent';

export interface Snippet {
  id: number;
  titolo: string;
  descrizione: string;
  tag: Tags[];
  dataCreazione: string;
  dataModifica: string;
  snippet: SnippetContent[];
}
