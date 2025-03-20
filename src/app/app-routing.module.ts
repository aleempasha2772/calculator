import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { CalciComponent } from './calci/calci.component';

const routes: Routes = [
  { path: 'addition', component: AdditionComponent},
  { path: 'subtraction', component: SubtractionComponent},
  { path: 'multiplication', component: MultiplicationComponent},
  { path: 'division', component: DivisionComponent},
  { path: 'calci', component: CalciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
