
 import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SuperHeroe } from '../models/superheroe.model';

import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let superheroesService: SuperheroesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SuperheroesService
      ]
    });

    superheroesService = TestBed.inject(SuperheroesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrieve all superheroes', () => {
    superheroesService.getSuperHeroes().subscribe((superHeroes) => {
      
      expect(superHeroes).toBeTruthy(console.log(superHeroes));
      expect(superHeroes.length).toBe(1, 'No superheroes returned');

      const superHeroe = superHeroes.find(superHeroe => superHeroe.name == 'ARAGORN');

      expect(superHeroe.name).toBe('ARAGORN');

    });
    const req = httpTestingController.expectOne('https://superheroes-d4f3a-default-rtdb.firebaseio.com//superheroes.json');
    expect(req.request.method).toEqual('GET');
    req.flush([{
        id: '1',
        gender: 'Male',
        height: 2,
        intelligence: 120,
        name: 'ARAGORN',
        race: 'Human',
        speed: 100,
        strength: 300,
        weight: 110
        }
    ]);
  });

  

  it('should retrieve get one superheroe', () => {
    superheroesService.getSuperHeroeById('1').subscribe((superHeroe) => {
      
      expect(superHeroe).toBeTruthy(console.log(superHeroe));

      expect(superHeroe.name).toBe('ARAGORN');

    });
    const req = httpTestingController.expectOne('https://superheroes-d4f3a-default-rtdb.firebaseio.com//superheroes/1.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
        id: '1',
        gender: 'Male',
        height: 2,
        intelligence: 120,
        name: 'ARAGORN',
        race: 'Human',
        speed: 100,
        strength: 300,
        weight: 110
      }
    );
  });
});
