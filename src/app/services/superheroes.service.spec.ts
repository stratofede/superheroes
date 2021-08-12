
 import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule, HttpClientTestingModule, ]
    });
    service = TestBed.inject(SuperheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
