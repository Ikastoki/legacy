import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  readonly images: GalleryImage[] = [
    { src: 'assets/html.png', alt: 'HTML' },
    { src: 'assets/css.png', alt: 'CSS' },
    { src: 'assets/ts.png', alt: 'TypeScript' },
    { src: 'assets/json.png', alt: 'JSON' },
  ];

  lightboxVisible = false;
  lightboxSrc = '';
  lightboxAlt = '';

  openLightbox(src: string, alt: string): void {
    this.lightboxSrc = src;
    this.lightboxAlt = alt;
    this.lightboxVisible = true;
  }

  closeLightbox(event?: MouseEvent): void {
    if (!event || event.target === event.currentTarget) {
      this.lightboxVisible = false;
    }
  }
}
