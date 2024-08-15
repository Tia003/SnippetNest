import { Injectable } from '@angular/core';
import { Folder } from '../Modules/Folder';

@Injectable({
  providedIn: 'root'
})

export class Service {

  //snippets types
  // 1 - Code
  // 2 - Text
  // 3 - Image
  // 4 - Video
  // 5 - Audio
  // 6 - File
  // 7 - Link
  // 8 - Other

  folders: Folder[] = [
    {
      id: 12,
      icon: 'folder',
      nome: 'HTML/CSS',
      descrizione: 'HTML (HyperText Markup Language) è un linguaggio di markup utilizzato per creare pagine web. Il suo scopo è di descrivere la struttura e l\'estetica di una pagina web, nonché di fornire il codice necessario per visualizzarla nel browser. HTML è una tecnologia open-source, sviluppata da Microsoft e sviluppata da W3C.',
      dataCreazione: '2024-06-04T19:38:18Z',
      dataModifica: '2024-06-04T19:38:18Z',
      snippets: [
        {
          id: 1,
          titolo: 'First snippet',
          descrizione: 'First snippet description',
          dataCreazione: '2024-06-04T19:38:18Z',
          dataModifica: '2024-06-04T19:38:18Z',
          tag: [
            {
              label: 'Web',
              type: 'purple',
            }
          ],
          snippetDetails: [
            {
              type: 1,
              titolo: 'Esempio 1',
              content: '<span class="glyphicon">ciao</span>',
              descrizione: 'Esempio 1 description',
            },
            {
              type: 1,
              titolo: 'Esempio 2',
              content: '<span class="glyphicon">prova</span>',
              descrizione: 'Esempio 2 description',
            }
          ],
        },
        {
          id: 2,
          titolo: 'Second snippet',
          descrizione: 'Second snippet description',
          dataCreazione: '2024-06-04T19:38:18Z',
          dataModifica: '2024-06-04T19:38:18Z',
          tag: [
            {
              label: 'Web',
              type: 'purple',
            },
            {
              label: 'Html',
              type: 'blue',
            },
          ],
          snippetDetails: [
            {
              type: 7,
              titolo: 'Esempio 3',
              content: '<span class="glyphicon">ciao</span>',
              descrizione: 'Esempio 3 description',
            },
            {
              type: 1,
              titolo: 'Esempio 4',
              content: '<span class="glyphicon">prova</span>',
              descrizione: 'Esempio 4 description',
            }
          ],
        }
      ]
    },
    {
      nome: 'Flutter',
      descrizione: 'Flutter is a mobile app development framework by Google that enables developers to build high-quality, natively compiled applications for iOS, Android, macOS, Windows, Linux, and Web from a single codebase.',
      id: 13,
      icon: 'folder',
      dataCreazione: '2024-06-04T19:38:18Z',
      dataModifica: '2024-06-04T19:38:18Z',
      snippets: null,
    },
    {
      nome: 'Web Development',
      descrizione: 'Web Development is the most popular programming language in the world and provides a variety of programming languages',
      id: 14,
      icon: 'folder',
      dataCreazione: '2024-06-04T19:38:18Z',
      dataModifica: '2024-06-04T19:38:18Z',
      snippets: null,
    },
  ];

  constructor() { }
  // snippetsType: SnippetsType

  public getListFolders(){
    return this.folders;
  }

}
