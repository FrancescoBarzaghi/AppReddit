import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true, // Questo componente è standalone
  imports: [],       // Non ci sono importazioni specifiche di moduli qui
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card'; // Applica la classe CSS 'card' all'elemento host (<app-article>)

  // Queste proprietà sono decorate con @Input(), il che significa che possono ricevere valori
  // dal componente genitore (AppComponent) quando viene usato nel template:
  // <app-article [title]="unTitolo" [link]="unLink" [votes]="unNumeroVoti"></app-article>
  @Input() votes: number = 0; // Default a 0 se non specificato
  @Input() title: string = ''; // Default a stringa vuota se non specificato
  @Input() link: string = 'http://angular.io'; // Default a un URL se non specificato

  constructor() {
    // Il costruttore non ha bisogno di inizializzare votes, title, link direttamente qui,
    // perché i valori verranno forniti tramite @Input() dal genitore.
  }

  /**
   * Incrementa il contatore dei voti.
   * @returns false per prevenire la propagazione dell'evento di click.
   */
  voteUp(): Boolean {
    this.votes += 1;
    return false;
  }

  /**
   * Decrementa il contatore dei voti.
   * @returns false per prevenire la propagazione dell'evento di click.
   */
  voteDown(): Boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
    // Metodi del ciclo di vita di Angular possono essere aggiunti qui se necessari
  }
}