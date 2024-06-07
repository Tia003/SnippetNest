import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollOnTopPage',
  templateUrl: './scrollOnTopPage.component.html',
  styleUrls: ['./scrollOnTopPage.component.css']
})
export class ScrollOnTopPageComponent implements OnInit {

  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    // Mostra il pulsante quando l'utente scrolla verso il basso di 100px
    this.isVisible = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit() {
  }

}
