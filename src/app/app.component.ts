import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private ROUTES = new Set(['HOME', 'CONTACT', 'PORTFOLIO', 'BLOG']);
  private currRoute = 'HOME';

  setRoute(page: string){this.currRoute = page; }
}
