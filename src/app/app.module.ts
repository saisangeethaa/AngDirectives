import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonEventsComponent } from './button-events/button-events.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { urlroutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ButtonEventsComponent,
    HeaderCompComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
