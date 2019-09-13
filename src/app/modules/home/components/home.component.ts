import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Output() routeChanged = new EventEmitter<any>();

  setRoute(route: string) {
    this.routeChanged.emit(route);
    console.log('Emitted route change.');
  }
}
