import { Component, signal } from '@angular/core';
import { Flashcard } from "./flashcard/flashcard";

@Component({
  selector: 'app-root',
  imports: [Flashcard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('15-flash-cards-app');
}
