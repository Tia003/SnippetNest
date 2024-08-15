import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../Services/Dialog.service';
import { SnackBarService } from '../../Services/SnackBar.service';
import { SnackBarType } from '../../Enum/SnackBarType.enum';

@Component({
  selector: 'app-NewRepository',
  templateUrl: './NewRepository.component.html',
  styleUrls: ['./NewRepository.component.css']
})
export class NewRepositoryComponent implements OnInit {

  constructor(
    public DialogService: DialogService,
    public SnackBarService: SnackBarService,
  ) { }

  ngOnInit() {

  }

  closeModal(){

    // Utilizzo il service per chiudere il dialog
    this.DialogService.setVisibility(false);
  }

  // Metodo per aggiungere una nuova repository
  AddRepository(){

    // Utilizzo il service per recuperare la notifica success
    var notifica = this.SnackBarService.GetSuccessObj(SnackBarType.inline, 'Repository creata', 'Arricchisci ora la tua repository con gli Snippet!', '')

    // Refresh notifica 
    this.SnackBarService.refresh(notifica);

    // Show the snackbar
    this.SnackBarService.show();

    // Chiudere il dialog
    this.DialogService.setVisibility(false);
  }

}
