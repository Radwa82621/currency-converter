import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CurrencyComponent } from './currency/currency.component';
import { ContactComponent } from './contact/contact.component';
import { ConvertComponent } from './convert/convert.component';
import { ConvertByDateComponent } from './convert-by-date/convert-by-date.component';
import { PrimeModule } from './module/prime/prime.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    CurrencyComponent,
    ContactComponent,
    ConvertComponent,
    ConvertByDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
