import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  openMenuAction: boolean = false;

  snippetTypeCode: SnippetsType = SnippetsType.Code;
  snippetTypeText: SnippetsType = SnippetsType.Text;

  pathIconDeleteBlack: string = '../../../assets/icons/deleteBlack.svg';
  pathIconDeleteWhite: string = '../../../assets/icons/deleteWhite.svg';
  currentPathIconDelete: string = this.pathIconDeleteBlack;

  folder: Folder = {
      "id": 12,
      "icon": "folder",
      "name": "HTML/CSS",
      "dataCreazione": "2024-06-04T19:38:18Z",
      "dataModifica": "2024-06-06T10:15:42Z",
      "snippets": [
        {
          "id": 1,
          "titolo": "Form di contatto",
          "descrizione": "Una navbar responsive per siti web è un elemento di navigazione progettato per adattarsi a diverse dimensioni di schermo, garantendo un'esperienza ottimale sia su dispositivi desktop che mobili. Questo componente essenziale offre una navigazione intuitiva e accessibile agli utenti, consentendo loro di esplorare facilmente le diverse sezioni del sito. La navbar responsive si distingue per la sua capacità di restringersi o espandersi dinamicamente in base alle dimensioni dello schermo",
          "dataCreazione": "2024-06-04T19:38:18Z",
          "dataModifica": "2024-06-05T13:20:30Z",
          "tag": [
            {
              "label": "Web",
              "type": "purple"
            },
            {
              "label": "HTML",
              "type": "blue"
            },
            {
              "label": "Form",
              "type": "green"
            }
          ],
          "snippetDetails": [
            {
              "type": 1,
              "titolo": "Codice HTML",
              "content": "<form>\n  <label for=\"name\">Nome:</label><br>\n  <input type=\"text\" id=\"name\" name=\"name\"><br>\n  <label for=\"email\">Email:</label><br>\n  <input type=\"email\" id=\"email\" name=\"email\"><br>\n  <label for=\"message\">Messaggio:</label><br>\n  <textarea id=\"message\" name=\"message\"></textarea><br>\n  <input type=\"submit\" value=\"Invia\">\n</form>",
              "descrizione": "Form HTML"
            },
            {
              "type": 1,
              "titolo": "Stile CSS",
              "content": "form {\n  border: 2px solid #ccc;\n  padding: 20px;\n  border-radius: 5px;\n}\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ntextarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}",
              "descrizione": "Stile del form"
            }
          ]
        },
        {
          "id": 2,
          "titolo": "Responsive Navbar",
          "descrizione": "Una navbar responsive per siti web",
          "dataCreazione": "2024-06-04T19:38:18Z",
          "dataModifica": "2024-06-06T09:45:22Z",
          "tag": [
            {
              "label": "Web",
              "type": "purple"
            },
            {
              "label": "HTML",
              "type": "blue"
            },
            {
              "label": "CSS",
              "type": "green"
            },
            {
              "label": "Responsive",
              "type": "yellow"
            }
          ],
          "snippetDetails": [
            {
              "type": 1,
              "titolo": "Codice HTML",
              "content": "<nav>\n  <ul>\n    <li><a href=\"#\">Home</a></li>\n    <li><a href=\"#\">About</a></li>\n    <li><a href=\"#\">Services</a></li>\n    <li><a href=\"#\">Contact</a></li>\n  </ul>\n</nav>",
              "descrizione": "Navbar HTML"
            },
            {
              "type": 1,
              "titolo": "Stile CSS",
              "content": "nav {\n  overflow: hidden;\n  background-color: #333;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nnav ul li {\n  float: left;\n}\n\nnav ul li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}",
              "descrizione": "Stile della navbar"
            }
          ]
        }
      ]
  }
  
  folderTemp: Folder = {...this.folder };

  tagList: any = [
    {
      "content": "web"
    },
    {
      "content": "html"
    },
  ]

  //_______________________

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
    this.folderTemp.snippets = [snippets];
  }

  hideSnippetDetail(){
    this.showSectionDetails = false; 
    this.folderTemp.snippets = this.folder.snippets;
  }

  FilterDateChange(event: any){
    console.log(event);
  }

  ClearFilter(){
    this.selectedTag = null;
    this.searchText = null;
    this.selectedDate = '';
  }
  
  onButtonDeleteOver(){
    this.currentPathIconDelete = this.pathIconDeleteWhite;
  }

  onButtonDeleteOut(){
    this.currentPathIconDelete = this.pathIconDeleteBlack;
  }
  
}
