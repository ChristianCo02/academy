import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { AcademyComponent } from './academy/academy.component';
import { HomeComponent } from './home/home.component';
import { StudentiComponent } from './studenti/studenti.component';
import { PdfVisComponent } from './pdf-vis/pdf-vis.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "academy", component:AcademyComponent},
  {path: "academy/studenti", component:StudentiComponent},
  {path: "academy/studenti/pdfVis", component:PdfVisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
