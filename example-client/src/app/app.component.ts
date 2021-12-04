import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-client';

  constructor(private readonly httpClient: HttpClient) {}

  send(port?: string): void {
    if (port) {
      // This is not required as reverse proxy handles routing.
      this.httpClient
      .get(`${window.origin}:${port}/test`)
      .subscribe((response) => console.log(response));
    }
    this.httpClient
      .get(`/test`)
      .subscribe((response) => console.log(response));
  }
}
