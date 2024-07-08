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
      name: 'HTML/CSS',
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
      name: 'Flutter',
      id: 13,
      icon: 'folder',
      dataCreazione: '2024-06-04T19:38:18Z',
      dataModifica: '2024-06-04T19:38:18Z',
      snippets: null,
    },
    {
      name: 'Web Development',
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
