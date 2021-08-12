import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuard } from '../guards/deactivate.guard';
import { SuperheroeDetailsComponent } from './superheroe-details/superheroe-details.component';
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';


const routes: Routes = [
  { 
    path: '', 
    component: SuperheroesListComponent 
  },
  { 
    path: 'superheroe', 
    component: SuperheroeDetailsComponent,
    canDeactivate: [DeactivateGuard] 
  },
  { 
    path: 'superheroe/:id', 
    component: SuperheroeDetailsComponent,
    canDeactivate: [DeactivateGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperheroesRoutingModule { }
