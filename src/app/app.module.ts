import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondRouteComponent } from './components/second-route/second-route.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstRouteComponent } from './components/first-route/first-route.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondRouteComponent,
    FirstRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
