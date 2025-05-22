import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component'; // Importa ArticleComponent
import { CommonModule } from '@angular/common'; // Importa CommonModule per *ngFor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ArticleComponent, // Rendi ArticleComponent disponibile per l'uso nel template
    CommonModule      // CommonModule è necessario per direttive come *ngFor
  ]
})
export class AppComponent {
  // Dichiarazione di un array per contenere gli oggetti articolo.
  // Ogni oggetto avrà 'title' (string), 'link' (string) e 'votes' (number).
  articles: { title: string; link: string; votes: number }[] = [];

  /**
   * Questa funzione viene chiamata quando il bottone "Submit link" viene cliccato.
   * Prende il titolo e il link dagli input del form.
   * @param title HTMLInputElement che rappresenta il campo input del titolo.
   * @param link HTMLInputElement che rappresenta il campo input del link.
   * @returns boolean Ritorna false per prevenire il ricaricamento della pagina.
   */
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    // Aggiungi un nuovo oggetto al *inizio* dell'array 'articles'.
    // In questo modo, i nuovi articoli appariranno per primi nella lista.
    this.articles.unshift({
      title: title.value,
      link: link.value,
      votes: 0 // Inizializza i voti a 0 per il nuovo articolo
    });

    // Svuota i campi di input dopo aver aggiunto l'articolo
    title.value = '';
    link.value = '';

    // Impedisce al browser di effettuare il submit del form e ricaricare la pagina
    return false;
  }
}