import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { GalleryComponent } from './components/gallery/gallery';
import { PaletteComponent } from './components/palette/palette';
import { InstallComponent } from './components/install/install';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    PaletteComponent,
    InstallComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
