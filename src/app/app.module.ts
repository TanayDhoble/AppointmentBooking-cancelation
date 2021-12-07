import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{MatButtonModule}from '@angular/material/button';
import{MatTableModule}from '@angular/material/table';
import{MatFormFieldModule}from '@angular/material/form-field';
import {MatDatepickerModule} from'@angular/material/datepicker';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatNativeDateModule}from '@angular/material/core';
import {MatProgressSpinnerModule} from'@angular/material/progress-spinner';
import {MatInputModule} from'@angular/material/input';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatToolbarModule, 
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
