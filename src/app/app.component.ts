import { Component, OnInit } from '@angular/core';
import { Service } from './Services/service'
import { Folder } from './Modules/Folder';
import { AuthService } from './Services/AuthService';
import { Router } from '@angular/router';
import { SnackBarComponent } from './Widgets/SnackBar/SnackBar.component';
import { SnackBarService } from './Services/SnackBar.service';
import { ToastContent } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    public service: Service, 
    public authService: AuthService,
    public SnackBarService: SnackBarService,
    public SnackBarComponent: SnackBarComponent,
    private router: Router
  ) {
    this.folders = service.getListFolders();
  }

  title = 'SnippetNest';
  isUserLoggedIn: any;
  active: boolean = true;
  folders: Folder[] = [];
  user: any;

  // boolean flag for snackbar visibility
  isSnackBarVisible: boolean = false;

  // boolean for show modal new repository
  ShowNewRepositoryModal: boolean = false;

  // path for icon menu button items
  pathIconDeleteBlack: string = '../../../assets/icons/deleteBlack.svg';
  pathIconDeleteWhite: string = '../../../assets/icons/deleteWhite.svg';
  currentPathIconDelete: string = this.pathIconDeleteBlack;

  notificaObj!: ToastContent;

  ngOnInit() {

    this.isUserLoggedIn = this.authService.isLoggedIn

    this.SnackBarService.showSnackBar$.subscribe(() => this.isSnackBarVisible = true);
    this.SnackBarService.hideSnackBar$.subscribe(() => this.isSnackBarVisible = false);
    
    this.SnackBarService.refreshSnackBar$.subscribe((notifica: ToastContent) => this.notificaObj = notifica);
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
