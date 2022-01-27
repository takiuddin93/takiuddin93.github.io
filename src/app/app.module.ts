import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from '../navigation/navigation.component';
import { SideButtonsComponent } from '../side-buttons/side-buttons.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideButtonsComponent,
    IntroductionComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
