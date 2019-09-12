import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HomeModule} from './modules/home/home.module';
import {ResumeModule} from './modules/resume/resume.module';
import {PortfolioModule} from './modules/portfolio/portfolio.module';
import {ContactModule} from './modules/contact/contact.module';
import {BlogModule} from './modules/blog/blog.module';

import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HomeModule,
    ResumeModule,
    PortfolioModule,
    ContactModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
