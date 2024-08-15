import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor() { }

  // DIALOG NUOVA REPOSITORY

    // Definisci la variabile come un BehaviorSubject
    private visibilitySubject = new BehaviorSubject<boolean>(false);

    // Esponi l'observable per permettere al component di iscriversi ai cambiamenti
    visibility$ = this.visibilitySubject.asObservable();

    // Metodo per aggiornare il valore della variabile
    setVisibility(visible: boolean) {
      this.visibilitySubject.next(visible);
    }


}
