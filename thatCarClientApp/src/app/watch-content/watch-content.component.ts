import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-watch-content',
  standalone: false,

  templateUrl: './watch-content.component.html',
  styleUrl: './watch-content.component.scss',
})
export class WatchContentComponent {
  @Input() data: any[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      url
      //this.convertToEmbedUrl(url)
    );
  }

  // Convert YouTube URL to embed format
  convertToEmbedUrl(url: string): string {
    return url.replace('watch?v=', 'embed/');
  }
}
