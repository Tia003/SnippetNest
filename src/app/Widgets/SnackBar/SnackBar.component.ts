import { Component, Injectable, Input, OnInit } from '@angular/core';
import { SnackBarService } from '../../Services/SnackBar.service';
import { ToastContent } from 'carbon-components-angular';

@Component({
  selector: 'app-SnackBar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SnackBarComponent implements OnInit {

  @Input() notifica: any;

  isVisible: boolean = true;

  constructor(
    private snackBarService: SnackBarService,
  ) { }

  ngOnInit() {
    this.snackBarService.showSnackBar$.subscribe(() => this.show());
    this.snackBarService.hideSnackBar$.subscribe(() => this.hide());
  }

  show() {

    this.isVisible = true;
  
    setTimeout(() => {
      this.snackBarService.hide();
    }, 3000); // Toast disappears after 3 seconds
  }

  hide() {
    this.isVisible = false;
  }

  isSnackVisible(): boolean {
    return this.isVisible;
  }

}
