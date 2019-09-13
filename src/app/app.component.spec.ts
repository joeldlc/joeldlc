import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSidenavModule} from '@angular/material/sidenav';

import {HomeModule} from './modules/home/home.module';
import {ResumeModule} from './modules/resume/resume.module';
import {PortfolioModule} from './modules/portfolio/portfolio.module';
import {ContactModule} from './modules/contact/contact.module';
import {BlogModule} from './modules/blog/blog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        HomeModule,
        ResumeModule,
        PortfolioModule,
        ContactModule,
        BrowserAnimationsModule,
        BlogModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render avatar name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Joel De La Cruz');
  });
});
