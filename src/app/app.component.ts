import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private ROUTES = new Set(['HOME', 'CONTACT', 'PORTFOLIO', 'BLOG']);
  private currRoute = 'HOME';
  private stagingRoute = '';

  setRoute(page: string){
    this.currRoute = page;
  }

  setStagingRoute(page: string) {
    this.stagingRoute = page;
  }
}
