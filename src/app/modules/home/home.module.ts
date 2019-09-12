import {NgModule} from '@angular/core';

import {HomeComponent} from './components/home.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatButtonModule,
  ],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule { }
