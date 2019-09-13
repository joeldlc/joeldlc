import {NgModule} from '@angular/core';

import {HomeComponent} from './components/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule { }
