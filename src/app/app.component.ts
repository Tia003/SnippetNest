import { Component } from '@angular/core';
import { Service } from './Services/service'
import { Folder } from './Modules/Folder';
import { AuthService } from './Services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'SnippetNest';
  isLoggedIn: any;
  active: boolean = true;
  folders: Folder[] = [];

  constructor(service: Service, authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn;
    this.folders = service.getListFolders();
    console.log(this.folders);
  }

  ngOnInit() {
    console.log(this.isLoggedIn);
  }

}
