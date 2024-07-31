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
  isUserLoggedIn: any;
  active: boolean = true;
  folders: Folder[] = [];
  user: any;

  constructor(
    public service: Service, 
    public authService: AuthService,
  ) {
    this.folders = service.getListFolders();
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    if (this.isUserLoggedIn) {
      this.user = this.authService.getUser();
    }
  }

}
