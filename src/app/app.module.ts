import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
