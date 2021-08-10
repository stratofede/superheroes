import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroeComponent } from './superheroes-module/superheroe/superheroe.component';
import { SuperheroesComponent } from './superheroes-module/superheroes/superheroes.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'superheroes', 
    pathMatch: 'full' 
  },
  { 
    path: 'superheroes', 
    component: SuperheroesComponent 
  },
  { 
    path: 'superheroe/:id', 
    component: SuperheroeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
