import { Component, signal, computed, inject, HostListener } from '@angular/core';
import { CajonesService } from './cajones.service';
import { HeaderComponent } from './header/header';
import { CajonCardComponent } from './cajon-card/cajon-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CajonCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private cajonesService = inject(CajonesService);

  readonly cajones = this.cajonesService.cajones;
  readonly categorias = this.cajonesService.categorias;
  readonly categoriaLabels = this.cajonesService.categoriaLabels;

  readonly filtroActivo = signal<string>('todos');
  readonly cajonAbiertoId = signal<string | null>(null);
  readonly animando = signal(false);
  private animandoTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly cajonesFiltrados = computed(() => {
    const filtro = this.filtroActivo();
    if (filtro === 'todos') return this.cajones;
    return this.cajones.filter(c => c.categoria === filtro);
  });

  toggleCajon(id: string) {
    this.cajonAbiertoId.update(current => current === id ? null : id);
  }

  filtrar(categoria: string) {
    if (this.filtroActivo() === categoria) return;

    if (this.animandoTimeout) clearTimeout(this.animandoTimeout);

    this.cajonAbiertoId.set(null);
    this.animando.set(true);

    this.animandoTimeout = setTimeout(() => {
      this.filtroActivo.set(categoria);
      this.animando.set(false);
      this.animandoTimeout = null;
    }, 300);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.cajonAbiertoId.set(null);
  }
}
