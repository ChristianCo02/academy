import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';   

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcademyComponent } from './academy/academy.component';
import { HomeComponent } from './home/home.component';
import { StudentiComponent } from './studenti/studenti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfVisComponent } from './pdf-vis/pdf-vis.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademyComponent,
    HomeComponent,
    StudentiComponent,
    PdfVisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
