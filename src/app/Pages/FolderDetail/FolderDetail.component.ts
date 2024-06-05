import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder } from '../../Modules/Folder';
import { SnippetContent } from '../../Modules/SnippetContent';
import { SnippetsType } from '../../SnippetsType.enum';
import { Snippet } from '../../Modules/Snippet';

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
  selectedTag: any;
  selectedDate: any;
  selectedSnippet!: Snippet;
  searchText: any = null;

  snippetTypeCode: SnippetsType = SnippetsType.Code;
  snippetTypeText: SnippetsType = SnippetsType.Text;

  folder: Folder = {
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
        dataModifica: '2024-06-05T19:38:18Z',
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
        snippetDetails: [
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
        snippetDetails: [
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

  tagList: any = [
    {
      "content": "web"
    },
    {
      "content": "html"
    },
  ]

  //_______________________

  prova: any;
  listAllSnippetTitles = [
    {
        content: "Abacus",
        selected: false
    },
    {
        content: "ssss",
        selected: false,
    },
    {
        content: "fffff",
        selected: false
    },
    {
        content: "gggg",
        selected: false
    },
    {
      content: "element1",
      selected: false
  },
  {
      content: "element2",
      selected: false
  },
  {
      content: "element3",
      selected: false
  },
  {
      content: "element4",
      selected: false
  },
  {
      content: "element5",
      selected: false
  },
  {
      content: "element6",
      selected: false
  },
  {
      content: "element7",
      selected: false
  },
  {
      content: "element8",
      selected: false
  },
  {
      content: "element9",
      selected: false
  },
  {
      content: "element10",
      selected: false
  },
  {
      content: "element11",
      selected: false
  },
  {
      content: "element12",
      selected: false
  },
  {
      content: "element13",
      selected: false
  },
  {
      content: "element14",
      selected: false
  },
  {
      content: "element15",
      selected: false
  },
  {
      content: "element16",
      selected: false
  },
  {
      content: "element17",
      selected: false
  },
  {
      content: "element18",
      selected: false
  },
  {
      content: "element19",
      selected: false
  },
  {
      content: "element20",
      selected: false
  },
];

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params: any) => {
      this.folderID = params.get('id');
    });
  }

  showSnippetDetail(snippets: Snippet){
    this.showSectionDetails = true;
    this.selectedSnippet = snippets;
    this.snippetDetails = snippets.snippetDetails;
    console.log(snippets);
  }

  valueChange(event: any){
    console.log(event);
  }

  ClearFilter(){
    this.selectedTag = null;
    this.searchText = null;
    this.selectedDate = '';
  }

}
