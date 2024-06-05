import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder } from '../../Modules/Folder';
import { SnippetContent } from '../../Modules/SnippetContent';
import { SnippetsType } from '../../SnippetsType.enum';

@Component({
  selector: 'app-FolderDetail',
  templateUrl: './FolderDetail.component.html',
  styleUrls: ['./FolderDetail.component.css']
})
export class FolderDetailComponent implements OnInit {

  folderID: any;
  routeSub: any;
  showSectionDetails: boolean = false;
  snippetDetails: SnippetContent[] = [];

  snippetTypeCode: SnippetsType = SnippetsType.Code;
  snippetTypeText: SnippetsType = SnippetsType.Text;

  folder: Folder = {
    id: 12,
    icon: 'folder',
    name: 'HTML/CSS',
    dataCreazione: '2024-06-04T19:38:18Z',
    dataModifica: '2024-06-04T19:38:18Z',
    content: [
      {
        id: 1,
        titolo: 'First snippet',
        descrizione: 'First snippet description',
        dataCreazione: '2024-06-04T19:38:18Z',
        dataModifica: '2024-06-05T19:38:18Z',
        tag: [
          {
            label: 'Web',
            type: 'purple',
          }
        ],
        snippet: [
          {
            type: 1,
            titolo: 'Esempio 1',
            content: '<span class="glyphicon">ciao</span>\n<span class="glyphicon"></span>',
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
        id: 1,
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
        snippet: [
          {
            type: 2,
            titolo: 'Esempio 3',
            content: 'Contenuto testuale per testare la sezione dedicata al contenuto testuale',
            descrizione: 'Esempio 3 description',
          },
          {
            type: 1,
            titolo: 'Esempio 4',
            content: '<span class="glyphicon">prova</span>',
            descrizione: 'Esempio 4 description',
          }
        ],
      },
      {
        id: 1,
        titolo: 'Terzo snippet',
        descrizione: 'Terzo snippet description',
        dataCreazione: '2024-06-04T19:38:18Z',
        dataModifica: '2024-06-05T19:38:18Z',
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
        snippet: [
          {
            type: 2,
            titolo: 'Esempio 3',
            content: 'Contenuto testuale per testare la sezione dedicata al contenuto testuale',
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
  }

  model: any;

  items: any = [
    {
      "content": "web"
    },
    {
      "content": "html"
    },
  ]

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params: any) => {
      this.folderID = params.get('id');
    });
  }

  showSnippetDetail(snippets: SnippetContent[]){
    this.showSectionDetails = true;
    this.snippetDetails = snippets;
    console.log(snippets);
  }

  valueChange(event: any){
    console.log(event);
  }

}
