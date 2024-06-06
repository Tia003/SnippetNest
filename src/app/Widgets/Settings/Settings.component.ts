import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Settings',
  templateUrl: './Settings.component.html',
  styleUrls: ['./Settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  selectedLenguage: any;
  lingue: any = [
    {
      "content": "Italiano"
    },
    {
      "content": "Inglese"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onChangeTheme(event: any){
    console.log(event.target.value);
  }

}
