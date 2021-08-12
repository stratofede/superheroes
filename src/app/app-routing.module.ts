import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'superheroes', 
    pathMatch: 'full' 
  },
  { 
    path: 'superheroes', 
    loadChildren: () => import('./superheroes/superheroes.module').then(m => m.SuperheroesModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
