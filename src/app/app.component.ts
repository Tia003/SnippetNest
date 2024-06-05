import { Component } from '@angular/core';
import { Service } from '../app/service'
import { Folder } from './Modules/Folder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'SnippetNest';
  active: boolean = true;
  folders: Folder[] = [];

  constructor(service: Service) {
    this.folders = service.getListFolders();
    console.log(this.folders);
  }

  ngOnInit() {
  }

}
