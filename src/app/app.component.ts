import { Component } from '@angular/core';
import { Service } from './Services/service'
import { Folder } from './Modules/Folder';
import { AuthService } from './Services/AuthService';
import { Router } from '@angular/router';

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

  // path for icon menu button items
  pathIconDeleteBlack: string = '../../../assets/icons/deleteBlack.svg';
  pathIconDeleteWhite: string = '../../../assets/icons/deleteWhite.svg';
  currentPathIconDelete: string = this.pathIconDeleteBlack;

  constructor(
    public service: Service, 
    public authService: AuthService,
    private router: Router
  ) {
    this.folders = service.getListFolders();
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isLoggedIn
  }

  GoToUserPage(){
    this.router.navigate(['/user']);
  }

  onButtonDeleteOver(){
    this.currentPathIconDelete = this.pathIconDeleteWhite;
  }

  onButtonDeleteOut(){
    this.currentPathIconDelete = this.pathIconDeleteBlack;
  }

}
