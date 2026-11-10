import { Component } from '@angular/core';

interface FlashCard {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-flashcard',
  imports: [],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css',
})
export class Flashcard {
  flashCards: FlashCard[] = [
    {
      question: 'What is the difference between var, let, and const?',
      answer:
        'In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.',
    },
    {
      question: 'What is Angular?',
      answer:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.',
    },
    {
      question: 'What is a Component in Angular?',
      answer:
        'A component is a basic building block of Angular applications. It controls a patch of screen called a view.',
    },
    {
      question: 'What is Data Binding?',
      answer:
        'Data binding is a core concept in Angular that allows communication between component and its view (DOM).',
    },
    {
      question: 'What are Services in Angular?',
      answer:
        'Services are JavaScript functions that are limited to do a specific task. They are used for sharing data and logic across components.',
    },
  ];

  currentIndex: number = 0;
  showAnswer: boolean = false;

  get currentCard(): FlashCard {
    return this.flashCards[this.currentIndex];
  }

  get progress(): number {
    return ((this.currentIndex + 1) / this.flashCards.length) * 100;
  }

  get progressText(): string {
    return `${this.currentIndex + 1} of ${this.flashCards.length}`;
  }

  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }

  nextCard(): void {
    if (this.currentIndex < this.flashCards.length - 1) {
      this.currentIndex++;
      this.showAnswer = false;
    }
  }
  
  previousCard(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showAnswer = false;
    }
  }

  canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  canGoNext(): boolean {
    return this.currentIndex < this.flashCards.length - 1;
  }
}
