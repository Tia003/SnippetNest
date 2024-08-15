import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-NewRepository',
  templateUrl: './NewRepository.component.html',
  styleUrls: ['./NewRepository.component.css']
})
export class NewRepositoryComponent implements OnInit {

  constructor(
    public fb: FormBuilder
  ) { }

  // Variabile per conteggio del numero di caratteri nella descrizione
  charCount: number = 0;

  // Form per la creazione del repository
  FormRepository!: FormGroup;

  // Variabile per la ricerca nella lista dei collaboratori
  searchText: any;

  // Lista dei collaboratori
  CollaboratoriList: any = [
    {
        content: "Carlo Verdi",
        selected: false
    },
    {
        content: "Maria Rossi",
        selected: false,
    },
    {
      content: "Luca Bianchi",
      selected: false,
  },
  ];

  ngOnInit() {

    // SetInitStateFormRepository
    this.setInitStateFormRepository();

    // Inizializzo charCount con la lunghezza iniziale del testo, se presente
    this.charCount = this.FormRepository.get('descrizione')?.value?.length || 0;
  }

  // Funzione per creare e impostare stato di default della form repository
  setInitStateFormRepository(){
    // Inizializzo la form con i valori predefiniti
    this.FormRepository = this.fb.group({
      nome: ['', Validators.required],
      descrizione: ['', Validators.required],
      dataCreazione: ['', Validators.required],
      dataModifica: ['', Validators.required],
      collaboratori: [],
    });
  }

  // Funzione per aggiornare charCount 
  updateCharCount() {
    this.charCount = this.FormRepository.get('descrizione')?.value.length || 0;
  }

  onSearchChange(event: any){
    this.searchText = event;
  }

}
