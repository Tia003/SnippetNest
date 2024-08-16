import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder } from '../../../Modules/Folder';
import { SnippetContent } from '../../../Modules/SnippetContent';
import { SnippetsType } from '../../../Enum/SnippetsType.enum';
import { Snippet } from '../../../Modules/Snippet';
import { SnippetType } from 'carbon-components-angular';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-FolderDetail',
  templateUrl: './FolderDetail.component.html',
  styleUrls: ['./FolderDetail.component.css'],

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
  snippetTtpeImage: SnippetsType = SnippetsType.Image;
  snippetTtpeLink: SnippetsType = SnippetsType.Link;

  pathIconDeleteBlack: string = '../../../assets/icons/deleteBlack.svg';
  pathIconDeleteWhite: string = '../../../assets/icons/deleteWhite.svg';
  currentPathIconDelete: string = this.pathIconDeleteBlack;

  errorImage: any;
  currentIndex: any;

  folder: Folder = {
      "id": 12,
      "icon": "folder",
      "nome": "HTML/CSS",
      "descrizione": "HTML (HyperText Markup Language) è un linguaggio di markup utilizzato per creare pagine web. Il suo scopo è di descrivere la struttura e l'estetica di una pagina web, nonché di fornire il codice necessario per visualizzarla nel browser. HTML è una tecnologia open-source, sviluppata da Microsoft e sviluppata da W3C.",
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
              "type": 7,
              "titolo": "Codice HTML",
              "content": 'https://primeng.org/installation',
              "descrizione": "Form HTML"
            },
            {
              "type": 1,
              "titolo": "Codice HTML",
              "content": "npm install --save",
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
            },
            {
              "type": 2,
              "titolo": "Annotazione su responsive",
              "content": "N.B. Quando sviluppi il front-end stai attento al responsive",
              "descrizione": ""
            },
            {
              "type": 3,
              "titolo": "Screenshot del front-end finale",
              "content": ['../../../assets/img/download.jpeg'],
              "descrizione": "Screenshot del front-end e dei mockup fatti prima dello sviluppo dell'applivativo"
            },
            {
              "type": 7,
              "titolo": "Link tool per generazione mockup",
              "content": "http://mockup.com",
              "descrizione": "Link del tool per generazione mock-up",
            }
          ]
        }
      ]
  }

  currentListImages: string = "";
  modalOpen: boolean = false;
  
  inline: SnippetType = SnippetType.inline;
  multi: SnippetType = SnippetType.multi;

  folderTemp: Folder = {...this.folder };

  tagList: any = [
    {
      "content": "web"
    },
    {
      "content": "html"
    },
  ]

  listAllSnippetTitles = [
    {
        content: "Form di contatto",
        selected: false
    },
    {
        content: "Responsive Navbar",
        selected: false,
    },
  ];

  constructor(
    public route: ActivatedRoute,
    private clipboardService: ClipboardService
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
    this.searchText = '';
    this.selectedDate = '';
  }
  
  onButtonDeleteOver(){
    this.currentPathIconDelete = this.pathIconDeleteWhite;
  }

  onButtonDeleteOut(){
    this.currentPathIconDelete = this.pathIconDeleteBlack;
  }

  onSearchChange(event: any){
    this.searchText = event;
    console.log("onSearchChange", event);
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextImage() {
    if (this.currentIndex < this.currentListImages.length - 1) {
      this.currentIndex++;
    }
  }
  
  openModal(image: string) {
    this.currentListImages = image;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.currentListImages = '';
  }

  copyText(text: any) {
    this.clipboardService.copy(text);
  }

}
