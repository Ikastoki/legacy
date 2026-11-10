import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  activeTab: 'js' | 'py' = 'js';

  switchTab(tab: 'js' | 'py'): void {
    this.activeTab = tab;
  }
}
