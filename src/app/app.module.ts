import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { MformComponent } from './mform/mform.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { HttpComponent } from './http/http.component';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MformComponent,
    ReactiveComponent,
    TemplateComponent,
    HttpComponent,
    ForComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [     AppComponent ]
})
export class AppModule { }
