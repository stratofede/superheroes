import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { SuperHeroe } from '../models/superheroe.model';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  baseURL = environment.api.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  getSuperHeroes(): Observable<Array<SuperHeroe>> {
    const url = `${this.baseURL}/superheroes.json`;
    return this.http.get<Array<SuperHeroe>>(url).pipe(
      map( this.jsonToObjectArray )
    );
  }

  getSuperHeroeById(id: string): Observable<SuperHeroe> {
    const url = `${this.baseURL}/superheroes/${id}.json`;
    return this.http.get<SuperHeroe>(url);
  }

  getSuperHeroesByFilter(filter: string): Observable<Array<SuperHeroe>> {
    return from(filter).pipe(
      switchMap(() => {
        return this.http.get(`${this.baseURL}/superheroes.json`).pipe(
          map( this.jsonToObjectArray ),
          map( (items: Array<SuperHeroe>) => { 
            return items.filter((item: SuperHeroe) => {
              if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                return item;
              }
            })
          })
      )}
    ))
  }

  
  createSuperHeroe(superHeroe: SuperHeroe) {
    const url = `${this.baseURL}/superheroes.json`;
    return this.http.post(url, superHeroe);
  }

  
  editSuperHeroe(id: string, superHeroe: SuperHeroe) {
    const url = `${this.baseURL}/superheroes/${id}.json`;
    return this.http.put(url, superHeroe);
  }

  
  deleteSuperHeroe(id: string) {
    const url = `${this.baseURL}/superheroes/${id}.json`;
    return this.http.delete(url);
  }

  private jsonToObjectArray(myObject: object) {
    const array:Array<SuperHeroe> = [];
    Object.keys(myObject).forEach((key) => {
      const obj = new SuperHeroe(
                        key, 
                        myObject[key].name,
                        myObject[key].gender,
                        myObject[key].race,
                        myObject[key].strength,
                        myObject[key].height,
                        myObject[key].weight,
                        myObject[key].intelligence,
                        myObject[key].speed,
                        );
      array.push(obj);
    });
    console.log(array);
    return array;
  }
}