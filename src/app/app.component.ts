import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currRoute = 'HOME';
  stagingRoute = '';

  setRoute(page: string) {
    this.currRoute = page;
  }

  setStagingRoute(page: string) {
    this.stagingRoute = page;
  }
}
