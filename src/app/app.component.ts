import { Component, OnInit } from '@angular/core';
import { Service } from './Services/service'
import { Folder } from './Modules/Folder';
import { AuthService } from './Services/AuthService';
import { Router } from '@angular/router';
import { SnackBarComponent } from './Widgets/SnackBar/SnackBar.component';
import { SnackBarService } from './Services/SnackBar.service';
import { ToastContent } from 'carbon-components-angular';
import { DialogService } from './Services/Dialog.service';
import { MenuService } from './Services/Menu.service';

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
    private router: Router,
    public DialogService: DialogService,
    public MenuService: MenuService,
  ) {
    this.folders = service.getListFolders();
  }

  title = 'SnippetNest';
  isUserLoggedIn: any;
  active!: boolean;
  folders: Folder[] = [];
  user: any;

  // boolean flag for snackbar visibility
  isSnackBarVisible!: boolean;

  // boolean for show modal new repository
  ShowNewRepositoryModal: boolean = false;

  // path for icon menu button items
  pathIconDeleteBlack: string = '../../../assets/icons/deleteBlack.svg';
  pathIconDeleteWhite: string = '../../../assets/icons/deleteWhite.svg';
  currentPathIconDelete: string = this.pathIconDeleteBlack;

  notificaObj: any = {};

  ngOnInit() {

    this.isUserLoggedIn = this.authService.isLoggedIn;

    this.SnackBarService.showSnackBar$.subscribe(() => this.isSnackBarVisible = true);
    this.SnackBarService.hideSnackBar$.subscribe(() => this.isSnackBarVisible = false);
    
    this.SnackBarService.refreshSnackBar$.subscribe((notifica: ToastContent) => this.notificaObj = notifica);

    // Iscriviti all'observable del dialog NewRepository e aggiorna lo stato locale in base ai cambiamenti
    this.DialogService.visibility$.subscribe(visible => {
      this.ShowNewRepositoryModal = visible;
    });

    // Iscriviti all'observable del menu e aggiorna lo stato locale in base ai cambiamenti
    this.MenuService.visibility$.subscribe(visible => {
      this.active = visible;
    });
  }

  pp(){
    this.MenuService.setVisibility(!this.active);
  }

  toggleMenu() {
    this.active = !this.active;
  }

  GoToUserPage() {
    this.router.navigate(['/user']);
  }

  onButtonDeleteOver() {
    this.currentPathIconDelete = this.pathIconDeleteWhite;
  }

  onButtonDeleteOut() {
    this.currentPathIconDelete = this.pathIconDeleteBlack;
  }

  GetActiveMenu(){
    return this.active
  }
}


