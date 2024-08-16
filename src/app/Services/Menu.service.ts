import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  // DIALOG NUOVA REPOSITORY

      // Definisci la variabile come un BehaviorSubject
      private visibilityMenuSubject = new BehaviorSubject<boolean>(false);

      // Esponi l'observable per permettere al component di iscriversi ai cambiamenti
      visibility$ = this.visibilityMenuSubject.asObservable();

      // Metodo per aggiornare il valore della variabile
      setVisibility(visible: boolean) {
        console.log("Visibility: ", visible);
        this.visibilityMenuSubject.next(visible);
      }

}
