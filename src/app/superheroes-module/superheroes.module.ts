import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroeComponent } from './superheroe/superheroe.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';



@NgModule({
  declarations: [
    SuperheroeComponent,
    SuperheroesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuperheroesModule { }
