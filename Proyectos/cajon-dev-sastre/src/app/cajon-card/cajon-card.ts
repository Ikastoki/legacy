import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Cajon } from '../cajones.service';

@Component({
  selector: 'app-cajon-card',
  standalone: true,
  templateUrl: './cajon-card.html',
  styleUrl: './cajon-card.css',
})
export class CajonCardComponent {
  @Input({ required: true }) cajon!: Cajon;
  @Input() abierto = false;
  @Output() toggle = new EventEmitter<void>();

  onCajonClick(event: MouseEvent) {
    if ((event.target as HTMLElement).closest('a')) return;
    this.toggle.emit();
  }

  onCerrarClick(event: MouseEvent) {
    event.stopPropagation();
    this.toggle.emit();
  }
}
