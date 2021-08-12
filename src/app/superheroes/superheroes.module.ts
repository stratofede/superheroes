import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FMaterialModule } from '../utils/material.module';

import { SuperheroesRoutingModule } from './superheroes-routing.module';

import { ItemListComponent } from '../components/item-list/item-list.component';
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';
import { SuperheroeDetailsComponent } from './superheroe-details/superheroe-details.component';
import { SearchComponent } from '../components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UppercaseDirective } from '../directives/uppercase.directive';


@NgModule({
  declarations: [
    ItemListComponent,
    SearchComponent,
    SuperheroeDetailsComponent,
    SuperheroesListComponent,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    FMaterialModule,
    SuperheroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SuperheroesModule { }
